'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('contactdetails', [{
      name: 'Sofia',
      value: 'Musagenitsa 98A',
      isMapAddress: 'yes',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Vidin',
      value: 'Krum Bachvarov',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },
};
