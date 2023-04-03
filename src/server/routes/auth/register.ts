import { Router } from "express";
import { createJWT } from "../../utils/tokens";
import { v4 as uuid } from 'uuid';
import db from '../../db';
import bcrypt from 'bcrypt';


const router = Router();

// POST /auth/register/
router.post('/', async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !isValidEmail(email)) {
            const error = new Error('Email invalid.');
            error['status'] = 400;
            throw error;
        }

        const [emailFound] = await db.users.find('email', email);
        if (emailFound) {
            const error = new Error('Email already exists.');
            error['status'] = 400;
            throw error;
        }
        const userDTO = {
            id: uuid(),
            ...req.body,
        };

        const salt = await bcrypt.genSalt(12);
        const hash = await bcrypt.hash(password, salt);

        userDTO.password = hash;

        const result = await db.users.insert(userDTO);
        delete userDTO.password;

        console.log(result);

        const token = createJWT(userDTO.id);
        res.json({ token });

    } catch (error) {
        next(error);
    }
})

function isValidEmail(email: string) {
    return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}

// REGEXES
//const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export default router;