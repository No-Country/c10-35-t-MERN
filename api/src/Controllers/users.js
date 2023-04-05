const { Users } = require("../db");
const jwt = require("jsonwebtoken");

const createUser = async (req,res)=>{
  res.send('crear usuario') 
}


module.exports = {
  createUser,
}