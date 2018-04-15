'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "jobId" to table "jobApplications"
 *
 **/

var info = {
    "revision": 3,
    "name": "added-new-column-jobId-to-jobapplication-table",
    "created": "2018-04-15T10:02:12.688Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "addColumn",
    params: [
        "jobApplications",
        "jobId",
        {
            "type": Sequelize.INTEGER,
            "allowNull": false
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
