const sequelize = require('../db')
const {DataTypes} = require('sequelize')


const Users = sequelize.define('five_values', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    tell: {type: DataTypes.STRING},
    userName: {type: DataTypes.STRING},
    old: {type: DataTypes.INTEGER},
    city: {type: DataTypes.STRING}
})


module.exports = {
    Users,
}





