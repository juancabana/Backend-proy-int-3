import express from 'express';
import passport from 'passport';
import AuthService from '../services/auth.service.js';

const router = express.Router();
const service = new AuthService();

router.post(
  // {
  //  "email": "juand.cabanat@unac.edu.co",
  //  "password": "password123"
  // }
  '/login',
  // capa de autenticación
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      res.json(service.signToken(user));
    } catch (error) {
      next(error);
    }
  }
);

// Recuperation email
router.post('/recovery', async (req, res, next) => {
  try {
    const { email } = req.body;
    const rta = await service.sendRecovery(email);
    res.json(rta);
  } catch (error) {
    next(error);
  }

});
// Change password
router.post('/change-password', async (req, res, next) => {
  try {
    const { token, newPassword } = req.body;
    const rta = service.changePassword(token, newPassword);
    res.json(rta);
  } catch (error) {
    next(error);
  }
});

export default router;
