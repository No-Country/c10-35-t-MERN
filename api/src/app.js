const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const brandRoute = require('./routes/brands');
const { PORT } = require('./config/config');

const app = express();

app.set('port', Number(PORT));

app.use(morgan('dev'));
app.use(cors());
app.use(
  express.json({
    limit: '20mb',
  })
);

// Mount routers
app.use('/api/v1/brands', brandRoute);

module.exports = app;
