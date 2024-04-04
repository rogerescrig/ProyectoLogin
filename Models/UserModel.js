const { DataTypes } = require('sequelize');
const { sequelize } = require('../db_connection/db_connection');
const Tareas = require('./TareasModel');

const Usuario = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
},
    nombre: {
      field : 'nombre',
      type: DataTypes.STRING,
      allowNull: false
    },
    correo: {
      field : 'correo',
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
      field : 'password',
        type: DataTypes.STRING,
        allowNull: false
    }},{

      timestamps: false,

    },);

  Usuario.hasMany(Tareas, { foreignKey: 'usuario_id'});
  Tareas.belongsTo(Usuario, {
    foreignKey :'usuario_id'
  });

  module.exports = Usuario
