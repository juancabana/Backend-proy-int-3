import express from 'express';
import passport from 'passport';
import ProfileService from './../services/profile.service.js';

const router = express.Router();
const service = new ProfileService();

// Get my user data

// Get crops associated with me
router.get(
  '/my-crops',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      const crops = await service.findCropsByUser(user.sub);
      res.json(crops);
    } catch (error) {
      next(error);
    }
  }
);

// Get posts associated with me

// Delete my crop

// Update my crop

export default router;
