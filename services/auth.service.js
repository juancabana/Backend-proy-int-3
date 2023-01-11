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

  async sendMail(email) {
    const user = await service.findByEmail(email);
    if (!user) {
      throw boom.unauthorized();
    }
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
    await transporter.sendMail({
      from: config.email, // sender address
      to: `${user.email}`, // list of receivers
      subject: 'Hello ✔', // Subject line
      text: 'Hello world?', // plain text body
      html: '<b>Hola, soy el backend de "cosco" enviándote un correo obviamente jajja</b>', // html body
    });

    return {message: 'Mail sent'}
  }
}

export default AuthService;
