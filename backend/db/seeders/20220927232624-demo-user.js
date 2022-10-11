'use strict';
const bcrypt = require("bcryptjs");
const { Op } = require("sequelize");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = 'airbnbtest';  // define your schema in options object
}

module.exports = {
    up: async (queryInterface, Sequelize) => {
        options.tableName='Users';
        return queryInterface.bulkInsert(options, [
            {
                firstName: 'Jonathan',
                lastName: 'Blubee',
                email: 'jbee@user.io',
                username: 'jbluebee',
                hashedPassword: bcrypt.hashSync('bigbeefs')
            },
            {
                firstName: 'Jackie',
                lastName: 'Junebug',
                email: 'jjunebug@user.io',
                username: 'jjunebug',
                hashedPassword: bcrypt.hashSync('junebuggies')
            },
            {
                firstName: 'Sammy',
                lastName: 'Samslug',
                email: 'sammyslug@user.io',
                username: 'sirslimes',
                hashedPassword: bcrypt.hashSync('sliminaround')
            },
            {
                firstName: 'Cathy',
                lastName: 'Catter',
                email: 'ilovecats@user.io',
                username: 'cattercats',
                hashedPassword: bcrypt.hashSync('rollitup')
            },
            {
                firstName: 'Barry',
                lastName: 'Butterfly',
                email: 'Barrybutts@user.io',
                username: 'bbbutterflies',
                hashedPassword: bcrypt.hashSync('flowersarepretty')
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        options.tableName='Users';
      return queryInterface.bulkDelete(options, {
        username: {
          [Op.in]: [
              'jbluebee',
              'jjunebug',
              'sirslimes',
              'cattercats',
              'bbbutterflies',
              ]
          }
        }, {});
    }
};
