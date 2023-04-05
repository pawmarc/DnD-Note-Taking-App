import { Router } from "express";
import db from '../../db';
import { checkToken } from "../../middlewares/auth.mw";
import { v4 as uuid } from 'uuid';

const router = Router();

router.route('*').post(checkToken).put(checkToken).delete(checkToken);

// GET api/notes/:id
router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const results = await db.notes.one(id);
        res.json({
            results,
            message: "Request completed. Got one note details."
        });
    } catch (error) {
        next(error);
    }
})

// GET api/notes
router.get('/', async (req, res, next) => {
    try {
        const results = await db.notes.all();
        res.json({
            results,
            message: "Request completed. Got all notes."
        });
    } catch (error) {
        next(error);
    }
})

// POST /api/notes/ CREATE NOTE
router.post('/', async (req, res, next) => {
    try {

        const noteDTO = {
            ...req.body,
            userid: req.payload.id,
            id: uuid(),
        }
        const result = await db.notes.insert(noteDTO);

        // const result = db.notes.insert({ userid, });
        res.json({ id: noteDTO.id, message: "Note created successfully" })
    } catch (error) {
        next(error);
    }
})

// DELETE /api/notes/
router.delete('/:id', async (req, res, next) => {
    try {
        const userid = req.payload.id;
        const id = req.params.id;
        const result = await db.notes._delete(id, userid);
        console.log(result.affectedRows);
        if (!result.affectedRows) {
            return res.status(400).json({
                id,
                message: "Note doesn't exist."
            })
        }
        res.json({
            id,
            message: "Note deleted successfully."
        })
    } catch (error) {
        next(error);
    }
})

// UPDATE /api/notes/
router.put('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const userid = req.payload.id;
        const noteDTO = {
            ...req.body
        }
        const result = await db.notes.update(noteDTO, id, userid);
        console.log(result);
        if (!result.affectedRows) {
            return res.status(400).json({
                id,
                userid,
                message: "Request seems ok but resorce doens't exist."
            })
        }
        res.json({
            id,
            message: "Note edited successfully!"
        })

    } catch (error) {
        next(error);
    }
})

export default router;