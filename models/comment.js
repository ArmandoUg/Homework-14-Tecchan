const { Model, DataTypes  } = require('sequelize');
const sequelize = require('../db');

class Comment extends Model {}
Comment.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    body: {
        type: DataTypes.STRING,
        allowNull: false,
}
}, { sequelize, modelName: 'comment', timestamps: true});

module.exports = Comment;