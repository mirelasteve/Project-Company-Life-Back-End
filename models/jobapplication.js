'use strict';
module.exports = (sequelize, DataTypes) => {
  const jobApplication = sequelize.define('jobApplication', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    jobId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cv: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    coverLetter: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {});
  jobApplication.associate = (models) => {
    // associations can be defined here
  };
  return jobApplication;
};
