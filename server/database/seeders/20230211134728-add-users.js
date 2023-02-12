'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        id: '88',
        first_name: 'BURAK99',
        last_name: 'KAR',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '77',
        first_name: 'BURAK100',
        last_name: 'KAR',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
