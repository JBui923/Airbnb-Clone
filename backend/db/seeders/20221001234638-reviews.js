'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = 'airbnbtest';  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName='Reviews'
    await queryInterface.bulkInsert(options, [
      {
        spotId: 1,
        userId: 2,
        review: 'Cannot wait to come back. I finished writing my book here!',
        stars: 5
      },
      {
        spotId: 2,
        userId: 1,
        review: 'A little scary at night but so much fun.',
        stars: 3
      },
      {
        spotId: 3,
        userId: 1,
        review: 'A perfect place to crash for the night.',
        stars: 2
      },
      {
        spotId: 4,
        userId: 5,
        review: 'Finally a place to get away from all the lights and noise.',
        stars: 4.5
      },
      {
        spotId: 5,
        userId: 4,
        review: 'Truly feels like home.',
        stars: 5
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    options.tableName='Reviews'
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete(options, {
      spotId: {
          [Op.in]: [ 1, 2, 3, 4, 5 ]
      }
    });
  }
};
