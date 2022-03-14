"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "User",
      [
        {
          email: "JohnDoe@gmail.com",
          password: "John Doe",
          username: "John Doe",
        },
        {
          email: "JohnDoe@gmail.com",
          password: "John Doe",
          username: "John Doe1",
        },
        {
          email: "JohnDoe@gmail.com",
          password: "John Doe",
          username: "John Doe2",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
