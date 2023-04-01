import { Router } from "express";
import { Query } from '../../db/pool';

const router = Router();

router.get('/', async (req, res, next) => {
    try {
        Query('SELECT * FROM notes')
            .then(async results => await res.json(results))
            .catch(err => {
                throw new Error(err.message)
            });
    } catch (error) {
        next(error);
    }
})

export default router;