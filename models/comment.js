const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');

class Comment extends Model {}
Comment.init({
    body: {
        type: DataTypes.STRING,
        allowNull: false,
}
}, { sequelize, modelName: 'comment', timestamps: true});

module.exports = Comment;