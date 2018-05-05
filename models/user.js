'use strict';
module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isAdmin: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {});
    user.associate = (models) => {
        // associations can be defined here
    };
    return user;
};