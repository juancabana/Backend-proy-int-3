import boom from '@hapi/boom';
import { Strategy } from 'passport-local';
import AuthService from './../../../services/auth.service.js';
import bcrypt from 'bcrypt';

const service = new AuthService();

const LocalStrategy = new Strategy(
  {
    usernameField: 'email',
    passwordField: 'password',
  },
  async (email, password, done) => {
    console.log(email, password);
    try {
      const user = await service.getUser(email, password);
      done(null, user)

    } catch (error) {
      done(error, false);
    }
  }
);

export default LocalStrategy;
