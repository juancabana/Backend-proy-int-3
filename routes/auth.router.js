import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import config from '../config/config.js';

const router = express.Router();

router.post(
  '/login',
  // capa de autenticación
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      const payload = {
        sub: user.id,
        role: user.role,
      };
      // Generar jwt
      const token = jwt.sign(payload, config.jwtSecret);
      res.json({
        user,
        token,
      });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
