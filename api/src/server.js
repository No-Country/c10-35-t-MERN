const app = require('./app');
const swaggerDocs = require('./utils/swagger');
app.listen(app.get('port'), () =>
  console.log('server running on port:', app.get('port'))
);
