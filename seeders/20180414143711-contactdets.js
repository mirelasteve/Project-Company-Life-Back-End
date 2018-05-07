'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('contactdetails', [{
                name: 'Main Address',
                value: 'Musagenitsa 98A, Sofia',
                isMapAddress: 'yes',
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                name: 'Address',
                value: 'Krum Bachvarov',
                isMapAddress: 'yes',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Address',
                value: 'Musageitsa 88B',
                isMapAddress: 'yes',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Address',
                value: 'Aprilov school, Gabrovo',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Address',
                value: 'Karanova mogila, Gabrovo',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Address',
                value: 'Roman stadium, Plovdiv',
                isMapAddress: 'yes',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Address',
                value: 'Regional historical museum, Ruse',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Address',
                value: 'Gherkin Tower, Gabrovo',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Address',
                value: 'London Eye, London',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Address',
                value: 'HISTORICAL MUSEUM, Varna',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Address',
                value: 'HISTORICAL MUSEUM, Burgas',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ], {});
    },
};