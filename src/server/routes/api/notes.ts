import { Router } from "express";
import db from '../../db';
import jwt from 'jsonwebtoken';
import config from "../../config";
import { checkToken } from "../../middlewares/auth.mw";

const router = Router();

router.route('*').post(checkToken).put(checkToken).delete(checkToken);


router.get('/', async (req, res, next) => {
    try {
        const results = await db.notes.all();
        res.json(results);
    } catch (error) {
        next(error);
    }
})

router.get('/private', checkToken, async (req, res, next) => {
    try {
        res.json('private endpoint!')

    } catch (error) {
        next(error);
    }
})

export default router;