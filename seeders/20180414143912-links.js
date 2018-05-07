'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('links', [{
                name: 'Explore new positions',
                linkTarget: '/careers',
                iconLink: 'icon link value',
                hidden: null,
                createdAt: new Date(),
                updatedAt: new Date(),
                type: 'action',
            }, {
                name: 'Find us',
                linkTarget: '/contacts',
                iconLink: 'icon link value2',
                hidden: null,
                createdAt: new Date(),
                updatedAt: new Date(),
                type: 'action',
            },
            {
                name: 'facebook',
                linkTarget: 'https://www.facebook.com/TelerikAcademy/',
                iconLink: 'fa fa-facebook',
                hidden: null,
                createdAt: new Date(),
                updatedAt: new Date(),
                type: 'social',
            },
            {
                name: 'twitter',
                linkTarget: 'https://twitter.com/telerikacademy?lang=bg',
                iconLink: 'fa fa-twitter',
                hidden: null,
                createdAt: new Date(),
                updatedAt: new Date(),
                type: 'social',
            },
            {
                name: 'linkedin',
                linkTarget: 'https://www.linkedin.com/company/telerik-academy/',
                iconLink: 'fa fa-linkedin',
                hidden: null,
                createdAt: new Date(),
                updatedAt: new Date(),
                type: 'social',
            },
        ], {});
    },
};