const { Sequelize } = require('sequelize');

const database = "ProyectoTareas";
const username = "postgres";
const password = "(MKT)2024re5611";
const host = "localhost";

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: 'postgres',
});

module.exports = {
  sequelize
}