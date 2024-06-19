const { DataTypes } = require("sequelize")

const Article = (sequelize) => {
    sequelize.define('Article', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name_article: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date_modification: {
            type: DataTypes.DATEONLY, // "YYYY-MM-DD"
            allowNull: true
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
    })
};

module.exports = { Article };