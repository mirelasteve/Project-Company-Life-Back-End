'use strict';
module.exports = (sequelize, DataTypes) => {
  const jobAds = sequelize.define('jobAds', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jobTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  jobAds.associate = () => {
   };
  return jobAds;
};
