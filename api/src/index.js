import app from './app';
import { sequelize } from './database/db';

/* eslint-disable no-console */
try {
  await sequelize.sync({ force: true });

  app.listen(app.get('port'), () => console.log('server running on port:', app.get('port')));
} catch (error) {
  console.log(error.message);
}
