import boom from '@hapi/boom';
import { Strategy } from 'passport-local';
import UserService from './../../../services/user.service.js';
import bcrypt from 'bcrypt';

const service = new UserService();

const LocalStrategy = new Strategy(
  {
    usernameField: 'email',
    passwordField: 'password',
  },
  async (email, password, done) => {
    console.log(email, password);
    try {
      const user = await service.findByEmail(email);
      if (!user) {
        done(boom.unauthorized(), false);
      }
      const isMatch = await bcrypt.compare(password, user.password_user);
      if (!isMatch) {
        done(boom.unauthorized(), false);
      }
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  }
);

export default LocalStrategy;
