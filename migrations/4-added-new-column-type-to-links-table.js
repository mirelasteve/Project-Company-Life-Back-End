'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "type" to table "links"
 *
 **/

var info = {
    "revision": 4,
    "name": "added-new-column-type-to-links-table",
    "created": "2018-04-24T14:21:12.801Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "addColumn",
    params: [
        "links",
        "type",
        {
            "type": Sequelize.STRING,
            "allowNull": true
        }
    ]
}];

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
