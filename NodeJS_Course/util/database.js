const Sequelize = require('sequelize')

const sequelize = new Sequelize('node-complete', 'root', 'GreenHiker89',{
    dialect: 'mysql', 
    host: 'localhost'
})

module.exports = sequelize