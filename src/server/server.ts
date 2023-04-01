import express from 'express';
import morgan from 'morgan';
import { v4 as uuid } from 'uuid';
import bcrypt from 'bcrypt';

import config from './config';
import routes from './routes';
import { configurePassport } from './middlewares/passport';
import { notFoundHandler, globalErrorHandler } from './middlewares/error-handlers.mw';

const app = express();

// status checkers
app.get('/status', (req, res) => res.sendStatus(200));
app.head('/status', (req, res) => res.sendStatus(200));

configurePassport(app);
app.use(express.static('public'));
app.use(express.json()); // make sure it's before routes
app.use(morgan('dev'));
app.use(routes);
app.use(notFoundHandler);
app.use(globalErrorHandler);

app.listen(`${config.app.port}`, () => console.log(`Server running on port ${config.app.port}...`));


// for test if index from config folder works
import './config';

// testing
import './db/pool';



// BCRYPT

// const salt = bcrypt.genSaltSync(12);
// const hash = bcrypt.hashSync('password123', salt);
// console.log(hash);


// import './db/queries/users';
