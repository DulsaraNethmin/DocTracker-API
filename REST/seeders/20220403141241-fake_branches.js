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
      await queryInterface.bulkInsert('branches', [{
        uuid:'1356d36d-05ca-4a50-98bf-5a941355f418',
        name: 'Gampaha Branch',
        number:"220/2",
        town:"Gampaha",
        street:"Colombo road",
        organization_id:'8cbcb43b-9ae9-4734-b09c-62f1e4c7b483',
        createdAt:"2022-04-03 12:45:05",
        updatedAt:"2022-04-03 12:45:05"
   
      },{
        uuid:'1356d36d-05ca-4000-98bf-5a941355f418',
        name: 'Aloka Branch',
        number:"227/2",
        town:"Kurunegala",
        street:"Kandy road",
        organization_id:'8cbcb43b-9ae9-4734-b09c-62f1e4c7b483',
        createdAt:"2022-04-03 12:45:05",
        updatedAt:"2022-04-03 12:45:05"
   
      },{
        uuid:'1356d36d-05ca-5000-98bf-5a941355f418',
        name: 'Sarasavi Branch',
        number:"267/2",
        town:"Kurunegala",
        street:"Colombo road",
        organization_id:'8cbcb43b-9ae9-4734-b09c-62f1e4c7b483',
        createdAt:"2022-04-03 12:45:05",
        updatedAt:"2022-04-03 12:45:05"
   
      },{
        uuid:'1356d36d-05ca-8000-98bf-5a941355f418',
        name: 'Vishaka Branch',
        number:"207/2",
        town:"Kandy",
        street:"Matale road",
        organization_id:'8cbcb43b-9ae9-4734-b09c-62f1e4c7b483',
        createdAt:"2022-04-03 12:45:05",
        updatedAt:"2022-04-03 12:45:05"
   
      },{
        uuid:'1356d36d-05ca-7800-98bf-5a941355f418',
        name: 'Paliyagoda Branch',
        number:"207/2",
        town:"Paliyagoda",
        street:"Main road",
        organization_id:'8cbcb43b-9ae9-4734-b09c-62f1e4c7b483',
        createdAt:"2022-04-03 12:45:05",
        updatedAt:"2022-04-03 12:45:05"
   
      },


    
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('branches', null, {});
  }
};
