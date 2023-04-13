const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const appRoutes = require('./routes/app.routes');

const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./utils/swagger');

const { PORT, API_PATH } = require('./config/config');

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
app.use(`${API_PATH}`, appRoutes);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));


module.exports = app;
