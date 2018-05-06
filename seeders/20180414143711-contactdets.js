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
                isMapAddress: 'yes',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Sofia',
                value: 'Musageitsa 88B',
                isMapAddress: 'yes',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Gabrovo',
                value: 'Aprilov school',
                isMapAddress: 'yes',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Karanovo',
                value: 'Karanova mogila',
                isMapAddress: 'yes',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Plovdiv',
                value: 'Roman stadium',
                isMapAddress: 'yes',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Stara Zagora',
                value: 'Regional historical museum',
                isMapAddress: 'yes',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'London',
                value: 'Gherkin Tower',
                isMapAddress: 'yes',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'London',
                value: 'London Eye',
                isMapAddress: 'yes',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Varna',
                value: 'HISTORICAL MUSEUM',
                isMapAddress: 'yes',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Burgas',
                value: 'HISTORICAL MUSEUM',
                isMapAddress: 'yes',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ], {});
    },
};