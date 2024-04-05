const Usuario = require("./../Models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const env = require('../config/token');

dotenv.config();

process.env.TOKEN_SECRET;
//  Registrar Usuarios (POST)
const register = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const password = bcrypt.hashSync(req.body.password, salt);

    console.log(Usuario);
    let body = req.body;
    const created_user = await Usuario.create({
      nombre: body.nombre,
      correo: body.correo,
      password: password,
    });
    res.status(201).json({
      msg: "Usuario registrado correctamente",
      data: created_user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error.error,
      msg: "Error al registrar",
    });
  }
};

//LOGIN USUARIOS (POST)

const login = async (req, res)=>{
  const user = await Usuario.findOne({ where : {nombre : req.body.nombre }});
  if(user){
     const password_valid =  bcrypt.compareSync(req.body.password,user.password);
     console.log(password_valid);
     if(password_valid){
         token = jwt.sign({"correo" : user.correo,"nombre":user.nombre },env.secret);
         res.status(200).json({ token : token , user: user});
     } else {
       res.status(400).json({ error : "Contraseña Incorrecta" });
     }
   
   }else{
     res.status(404).json({ error : "Usuario inexistente" });
   }
   
}
   


//  METODO GET
  
const getUsers = async function (req, res){
  try{
    const users = await Usuario.findAll();
    res.status(200).json(users);
  }catch(err){
    console.log(err);
    res.status(500).json({error: "ERROR PARA OBTENER LOS USUARIOS"})
  }
}

//  METODO UPDATE
const update = async function (req, res) {
  try {
    const usuarios = await Usuario.findOne({where: {id: req.params.id }});
    await usuarios.update(req.body);
    res.status(200).json(usuarios);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = { register, login, getUsers, update };
