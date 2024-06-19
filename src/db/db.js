require('dotenv').config();
const { Sequelize } = require('sequelize');
const { User } = require('../models/User');
const { Article } = require('../models/Article');

const { URL_POSTGRESQL, PORT_POSTGRESQL } = process.env

const sequelize = new Sequelize(URL_POSTGRESQL, {
    logging: false,
    native: false,
    port: PORT_POSTGRESQL
});

User(sequelize);
Article(sequelize);


module.exports = { sequelize, ...sequelize.models };