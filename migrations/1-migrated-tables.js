'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "contactDetails", deps: []
 * createTable "jobAds", deps: []
 * createTable "jobApplications", deps: []
 * createTable "jobTypes", deps: []
 * createTable "links", deps: []
 * createTable "users", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "migrated-tables",
    "created": "2018-05-06T16:45:03.137Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "contactDetails",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "name": {
                    "type": Sequelize.STRING,
                    "allowNull": false
                },
                "value": {
                    "type": Sequelize.STRING,
                    "allowNull": false
                },
                "isMapAddress": {
                    "type": Sequelize.STRING,
                    "allowNull": true
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "jobAds",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "title": {
                    "type": Sequelize.STRING,
                    "allowNull": false
                },
                "description": {
                    "type": Sequelize.TEXT,
                    "allowNull": false
                },
                "status": {
                    "type": Sequelize.STRING,
                    "allowNull": false
                },
                "jobTypeId": {
                    "type": Sequelize.INTEGER,
                    "allowNull": false
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "jobApplications",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "userId": {
                    "type": Sequelize.INTEGER,
                    "allowNull": false
                },
                "jobId": {
                    "type": Sequelize.INTEGER,
                    "allowNull": false
                },
                "title": {
                    "type": Sequelize.STRING,
                    "allowNull": false
                },
                "firstName": {
                    "type": Sequelize.STRING,
                    "allowNull": false
                },
                "lastName": {
                    "type": Sequelize.STRING,
                    "allowNull": false
                },
                "email": {
                    "type": Sequelize.STRING,
                    "allowNull": false
                },
                "comment": {
                    "type": Sequelize.STRING,
                    "allowNull": true
                },
                "cv": {
                    "type": Sequelize.STRING,
                    "allowNull": false
                },
                "coverLetter": {
                    "type": Sequelize.STRING,
                    "allowNull": true
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "jobTypes",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "name": {
                    "type": Sequelize.STRING,
                    "allowNull": false
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "links",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "name": {
                    "type": Sequelize.STRING,
                    "allowNull": false
                },
                "linkTarget": {
                    "type": Sequelize.STRING,
                    "allowNull": false
                },
                "iconLink": {
                    "type": Sequelize.STRING,
                    "allowNull": false
                },
                "hidden": {
                    "type": Sequelize.STRING,
                    "allowNull": true
                },
                "type": {
                    "type": Sequelize.STRING,
                    "allowNull": true
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "users",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "email": {
                    "type": Sequelize.STRING,
                    "allowNull": false,
                    "unique": true
                },
                "password": {
                    "type": Sequelize.STRING,
                    "allowNull": false
                },
                "isAdmin": {
                    "type": Sequelize.STRING,
                    "allowNull": true
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                }
            },
            {}
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
