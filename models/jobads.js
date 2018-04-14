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
  }, {});
  jobAds.associate = (models) => {
    const {
      jobType,
    } = models;

    jobType.hasMany(jobAds);
  };
  return jobAds;
};
