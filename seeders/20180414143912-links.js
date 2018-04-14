'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('links', [{
      name: 'Action Link name',
      linkTarget: 'link target value',
      iconLink: 'icon link value',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Action Link name2',
      linkTarget: 'link target value2',
      iconLink: 'icon link value2',
      hidden: 'yes',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },
};
