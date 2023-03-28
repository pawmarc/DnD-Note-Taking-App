import express from 'express';
import morgan from 'morgan';

import config from './config';
import routes from './routes';
import { notFoundHandler, globalErrorHandler } from './middlewares/error-handlers';

const app = express();

// status checkers
app.get('/status', (req, res) => res.sendStatus(200));
app.head('/status', (req, res) => res.sendStatus(200));

app.use(express.static('public'));
app.use(express.json()); // make sure it's before routes
app.use(morgan('dev'));
app.use(routes);
app.use(notFoundHandler);
app.use(globalErrorHandler);

app.listen(`${config.app.port}`, () => console.log(`Server running on port ${config.app.port}...`));


// for test if index from config folder works
import './config';