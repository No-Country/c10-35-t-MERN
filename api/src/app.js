import express from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import morgan from 'morgan';
import cors from 'cors';
// agregamos la regla o lo dejamos asi?
// eslint-disable-next-line import/extensions
import { PORT } from './config/config.js';

const app = express();

app.set('port', PORT);

app.use(morgan('dev'));
app.use(cors());

export default app;
