'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users', [{
            email: 'murray1990@abv.bg',
            password: '123456',
            isAdmin: 'yes',
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            email: 'mmurray@abv.bg',
            password: 'randompass',
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {});
    },
};