'use strict';
module.exports = (sequelize, DataTypes) => {
  const link = sequelize.define('link', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    linkTarget: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    iconLink: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hidden: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {});
  link.associate = (models) => {
    // associations can be defined here
  };
  return link;
};
