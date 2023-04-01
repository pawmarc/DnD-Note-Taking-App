import { Router } from "express";
import passport from "passport";

const router = Router();

router.post('/', passport.authenticate('local', { session: false }), (req, res, next) => {
    res.json(req.body);
})

export default router;