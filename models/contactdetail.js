'use strict';
module.exports = (sequelize, DataTypes) => {
  const contactDetail = sequelize.define('contactDetail', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isMapAddress: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {});
  contactDetail.associate = (models) => {
    // associations can be defined here
  };
  return contactDetail;
};
