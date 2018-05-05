'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users', [{
                email: 'murray1990@abv.bg',
                password: '$2b$10$D1xHMpJ8Pp8hffXg0bUMtOS2kKyysfje7EoJy7QVkftvymE42cxCy',
                isAdmin: 'yes',
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                email: 'mmurray@abv.bg',
                password: '$2b$10$D1xHMpJ8Pp8hffXg0bUMtOS2kKyysfje7EoJy7QVkftvymE42cxCy',
                isAdmin: 'no',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                email: 'mirela@abv.bg',
                password: '$2b$10$D1xHMpJ8Pp8hffXg0bUMtOS2kKyysfje7EoJy7QVkftvymE42cxCy',
                isAdmin: 'yes',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                email: 'mario@abv.bg',
                password: '$2b$10$D1xHMpJ8Pp8hffXg0bUMtOS2kKyysfje7EoJy7QVkftvymE42cxCy',
                isAdmin: 'yes',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                email: 'john@abv.bg',
                password: '$2b$10$D1xHMpJ8Pp8hffXg0bUMtOS2kKyysfje7EoJy7QVkftvymE42cxCy',
                isAdmin: 'no',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                email: 'emily@abv.bg',
                password: '$2b$10$D1xHMpJ8Pp8hffXg0bUMtOS2kKyysfje7EoJy7QVkftvymE42cxCy',
                isAdmin: 'no',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                email: 'marselinio@abv.bg',
                password: '$2b$10$D1xHMpJ8Pp8hffXg0bUMtOS2kKyysfje7EoJy7QVkftvymE42cxCy',
                isAdmin: 'no',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                email: 'messi@abv.bg',
                password: '$2b$10$D1xHMpJ8Pp8hffXg0bUMtOS2kKyysfje7EoJy7QVkftvymE42cxCy',
                isAdmin: 'no',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                email: 'alehandro@abv.bg',
                password: '$2b$10$D1xHMpJ8Pp8hffXg0bUMtOS2kKyysfje7EoJy7QVkftvymE42cxCy',
                isAdmin: 'no',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                email: 'ronaldo@abv.bg',
                password: '$2b$10$D1xHMpJ8Pp8hffXg0bUMtOS2kKyysfje7EoJy7QVkftvymE42cxCy',
                isAdmin: 'no',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                email: 'motsi@razgrad.bg',
                password: '$2b$10$D1xHMpJ8Pp8hffXg0bUMtOS2kKyysfje7EoJy7QVkftvymE42cxCy',
                isAdmin: 'no',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ], {});
    },
};