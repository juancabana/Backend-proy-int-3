import UserServices from './user.service.js';
import boom from '@hapi/boom';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config/config.js';
import nodemailer from 'nodemailer';

const service = new UserServices();

class AuthService {
  constructor() {}
  async getUser(email, password) {
    const user = await service.findByEmail(email);
    if (!user) {
      throw boom.unauthorized();
    }
    const isMatch = await bcrypt.compare(password, user.password_user);
    if (!isMatch) {
      throw boom.unauthorized();
    }
    delete user.dataValues.password_user;
    return user;
  }

  async sendRecovery(email) {
    const user = await service.findByEmail(email);
    if (!user) {
      throw boom.unauthorized();
    }
    const payload = { sub: user.id };
    // Generar jwt
    const token = jwt.sign(payload, config.jwtSecret, { expiresIn: '15min' });
    const link = `http://myfrontend.com/recovery?token=${token}`;
    await service.update(user.id, { recovery_token: token });
    const mail = {
      from: config.email, // sender address
      to: `${user.email}`, // list of receivers
      subject: 'Email para rcuperar contraseña', // Subject line
      html: `<b>Ingresa a este link para recuperar la contraseña => ${link}</b>`, // html body
    };

    const rta = await this.sendMail(mail);
    return rta;
  }

  signToken(user) {
    const payload = {
      sub: user.id,
      role: user.role,
    };
    // Generar jwt
    const token = jwt.sign(payload, config.jwtSecret);
    return {
      user,
      token,
    };
  }

  async changePassword(token, newPassword) {
    try {
      const payload = jwt.verify(token, config.jwtSecret);
      const user = await service.findOne(payload.sub);
      // console.log(payload)
      if (user.recovery_token !== token) {
        throw boom.unauthorized();
      }

      const hash = await bcrypt.hash(newPassword, 10);
      // console.log(user.id, { recovery_token: null, password_user: hash })
      await service.update(user.id, { recovery_token: null, password_user: hash });
      return {message: 'Password changed'};
    } catch (error) {
      throw boom.unauthorized();
    }
  }

  async sendMail(infoMail) {
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: config.email,
        pass: config.passwordMail,
      },
    });

    // send mail with defined transport object
    await transporter.sendMail(infoMail);

    return { message: 'Mail sent' };
  }
}

export default AuthService;
