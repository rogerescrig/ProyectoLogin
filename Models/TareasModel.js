const { DataTypes } = require('sequelize');
const { sequelize } = require('../db_connection/db_connection');


const Tareas = sequelize.define('Tareas', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false
  }},{
    timestamps: false,
  },);


module.exports = {
    Tareas
  };