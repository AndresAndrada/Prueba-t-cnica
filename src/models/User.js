const { DataTypes } = require("sequelize")

const User = (sequelize) => {
    sequelize.define('User', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            // allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            // allowNull: false, // Esto evita valores nulos en la columna password
        },
        dni: {
            type: DataTypes.STRING,
            // allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contact: {
            type: DataTypes.INTEGER,
            // allowNull: true,
        },
        admin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        rol: {
            type: DataTypes.ENUM('student', 'teacher'),
            defaultValue: "student"
        },
        deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    })
};

module.exports = { User };