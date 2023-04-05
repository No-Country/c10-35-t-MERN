const app = require('./app');

app.listen(app.get('port'), () =>
  console.log('server running on port:', app.get('port'))
);
