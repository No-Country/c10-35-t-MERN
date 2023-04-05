const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bcrypt = require('bcrypt')
const sequelize = require('sequelize');
const { body, validationResult } = require('express-validator')
const PORT = process.env.PORT || 3000

const Users = require('./models/users.js')

const app = express();

app.set("port", PORT);

app.use(morgan("dev")); 
app.use(cors());
app.use(express.json());

// Rutas

app.post('/register',body('mail').isEmail(),
body('password').isLength({min:8}),
body('repeatedPassword').isLength({min:8}),
async (req, res) => {
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

  const { fullname, nameCommerce, mail, password, repeatedPassword } = req.body; 
  // Comprobar si los campos usuario y contraseña existen
  if (!fullname || !nameCommerce || !mail || !password || !repeatedPassword) {
    return res.status(400).json({message:'Faltan datos necesarios'});
  }
  if(password !== repeatedPassword){
    return res.status(401).json({message: "Las contraseñas no coinciden"})
  }

 
  // try {
    // Comprobar si el usuario ya existe en la base de datos
    // const existingUser = await Users.findOne({ username });
    // if (existingUser) {
    //   return res.status(409).send('Este usuario ya existe');
    // } 
    // Hashear la contraseña
    // const salt = await bcrypt.genSalt(10);
    // console.log(salt)
    // const hashedPassword = await bcrypt.hash(password, salt);

    // Crear un nuevo usuario con la contraseña hasheada
    // const newUser = new Users({
    //   username,
    //   password: hashedPassword
    // });
    // await newUser.save();

    // Devolver un mensaje de éxito
    // res.status(201).send('Usuario creado con éxito');
  // } catch (err) {
  //   console.error(err);
  //   res.status(500).send('Ha ocurrido un error al crear el usuario');
  // }
});

app.get('/',(req,res)=>{
  res.send('Bienvenidos a Stocker')
})



module.exports = app
