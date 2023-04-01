import passport from 'passport';
import passportLocal from 'passport-local';
import type { Express } from 'express';
import bcrypt from 'bcrypt';

import db from '../db';

export function configurePassport(app: Express) {

    passport.use(new passportLocal.Strategy({
        'usernameField': 'email',
        'session': false
    }, async (email, password, done) => {
        try {
            const [userFound] = await db.users.find('email', email);
            if (userFound && await bcrypt.compare(password, userFound.password)) {
                delete userFound.password;
                return done(null, userFound);
            }

            done(null, false, { message: 'invalid credentials' });

        } catch (error) {
            done(error);
        }
        //* 1. check if email existsj
        // if not = done('bad')

        //* 2. if email exists compare password
        // if not matching = done('bad')

        //* 3. if got here = done('good')

    }));

    app.use(passport.initialize());
}