const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const port = process.env.PORT || 3001;


conn.sync({ force: true }).then(() => {
  server.listen(port, () => {   
    console.log(`escuchando en puerto ${port}`);
  });
});