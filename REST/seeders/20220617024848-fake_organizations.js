'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

     await queryInterface.bulkInsert('organizations', [{
      uuid:"8cbcb43b-9ae9-4734-b09c-62f1e4c7b483",
      name: 'Supernova',
      owner:null,
      createdAt:"2022-04-03 12:45:05",
      updatedAt:"2022-04-03 12:45:05"
   },{
    uuid:"8cbcb43b-9ae9-9090-b09c-62f1e4c7b483",
    name: 'SunLanka',
    owner:null,
    createdAt:"2022-04-03 12:45:05",
    updatedAt:"2022-04-03 12:45:05"
 } ,{
  uuid:"8cbcb43b-9ae9-1000-b09c-62f1e4c7b483",
  name: 'DevBoom',
  owner:null,
  createdAt:"2022-04-03 12:45:05",
  updatedAt:"2022-04-03 12:45:05"
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
     await queryInterface.bulkDelete('organizations', null, {});
  }
};
