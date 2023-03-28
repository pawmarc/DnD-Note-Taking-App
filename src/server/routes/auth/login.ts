import { Router } from "express";

const router = Router();

router.post('/', (req, res) => {
    res.json(req.body);
})

export default router;