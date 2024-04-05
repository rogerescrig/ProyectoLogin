const express = require('express');
const { sequelize } = require('./db_connection/db_connection');
const app = express();
const port = 3000;

const cors = require("cors");

app.use(
  express.urlencoded({
    extended: true,
    limit: '50mb',
    parameterLimit: 500,
  }),
);
app.use(express.json({limit: '50mb'}));
 
app.use(cors());

const routerAuth = require('./Routes/UserRouter');
const routerTareas = require('./Routes/TareasRouter');

app.use('/api',routerTareas);
app.use('/auth',routerAuth);



async function dbConnect(){
  try {
  await sequelize.sync({force: false});
  console.log('Conexion a la base de datos')
  app.listen(port,"0.0.0.0");
  console.log('Server running:', port);
 //await Usuarios.sync({force:true});
 //await Tareas.sync({force:true});


  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
  }
}

dbConnect()