const Sequelize = require('sequelize')
const conn = new Sequelize('mysql://avanade:password@localhost:3310/avanade')

module.exports = conn