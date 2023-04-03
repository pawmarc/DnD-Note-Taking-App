import passport from 'passport';
import PassportLocal from 'passport-local';
import PassportJWT from 'passport-jwt';
import bcrypt from 'bcrypt';
import db from '../db';
import config from '../config';
import type { Express } from 'express';
import users from '../db/queries/users';
export function configurePassport(app: Express) {

    passport.use(new PassportLocal.Strategy({
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

    passport.use(new PassportJWT.Strategy({
        jwtFromRequest: PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.jwt.secret,
    }, (payload, done) => {
        try {
            done(null, payload);
        } catch (error) {
            done(error);
        }
    }))
    app.use(passport.initialize());
}

