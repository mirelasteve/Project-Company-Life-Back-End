'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('jobtypes', [{
                name: 'IT',
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                name: 'Marketing',
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                name: 'Sales',
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                name: 'Operations',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Education',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Pharmacy',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Accounting',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Aviation',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Finance',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Logistics',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Other',
                createdAt: new Date(),
                updatedAt: new Date(),
            }
        ], {});
    },
};