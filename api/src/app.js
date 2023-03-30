import express from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import morgan from 'morgan';
import cors from 'cors';

import { PORT } from './config/config.js';
import router from './routes/index.js';

const app = express();

app.set('port', PORT);

// Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/', router);

export default app;
