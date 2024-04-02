const { DataTypes } = require('sequelize');
const { sequelize } = require('../db_connection/db_connection');
const { Tareas } = require('./TareasModel');

const Usuario = sequelize.define('User', {

    Nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Correo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Contraseña: {
        type: DataTypes.STRING,
        allowNull: false
    }},{

      timestamps: false,

    },);

  Usuario.hasMany(Tareas, { foreignKey: 'usuario_id'});
  Tareas.belongsTo(Usuario, {
    foreignKey :'usuario_id'
  });

  module.exports = {
    Usuario
  };