import app from './app.js';
import { sequelize } from './database/db.js';

/* eslint-disable no-console */
try {
  await sequelize.sync({ force: true });

  app.listen(app.get('port'), () => console.log('server running on port:', app.get('port')));
} catch (error) {
  console.log(error.message);
}
