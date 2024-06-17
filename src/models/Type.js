const { DataTypes } = require("sequelize");

const Type = (sequelize) => {
    sequelize.define('Type', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
        {
            timestamps: false,
        });
};

module.exports = { Type };