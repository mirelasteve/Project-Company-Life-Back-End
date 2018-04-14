'use strict';
module.exports = (sequelize, DataTypes) => {
  const jobType = sequelize.define('jobType', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});
  jobType.associate = (models) => {
    // associations can be defined here
  };
  return jobType;
};
