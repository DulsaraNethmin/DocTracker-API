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
      await queryInterface.bulkInsert('documentusers', [{
        doc_id:'5e7f88b9-67b7-4f65-9c7f-bc4698c4e77f',
        customer_id:'2a9203fc-5390-42bd-b1e0-6dfd75776c90',
        date:null,
        is_current_user:true,
       createdAt:"2022-04-03 12:45:05",
        updatedAt:"2022-04-03 12:45:05"
      },{
        doc_id:'5e7f88b9-67b7-4f65-9c7f-bc4698c4e77f',
        customer_id:'2a9203fc-5390-42bd-b1e0-6dfd75776c90',
        date:null,
        is_current_user:false,
       createdAt:"2022-04-03 12:45:05",
        updatedAt:"2022-04-03 12:45:05"
      },{
        doc_id:'5e7f88b9-67b7-4f65-9c7f-bc4698c4e77f',
        customer_id:'2a9203fc-5391-42bd-b1e0-6dfd75776c90',
        date:null,
        is_current_user:false,
       createdAt:"2022-04-03 12:45:05",
        updatedAt:"2022-04-03 12:45:05"
      },{
        doc_id:'5e7f88b9-67b7-4f65-9c7f-bc4698c4e77f',
        customer_id:'2a9203fc-5392-42bd-b1e0-6dfd75776c90',
        date:null,
        is_current_user:false,
       createdAt:"2022-04-03 12:45:05",
        updatedAt:"2022-04-03 12:45:05"
      },{
        doc_id:'5e7f88b9-1000-4f65-9c7f-bc4698c4e77f',
        customer_id:'2a9203fc-5390-42bd-b1e0-6dfd75776c90',
        date:null,
        is_current_user:false,
       createdAt:"2022-04-03 12:45:05",
        updatedAt:"2022-04-03 12:45:05"
      },{
        doc_id:'5e7f88b9-1000-4f65-9c7f-bc4698c4e77f',
        customer_id:'2a9203fc-5391-42bd-b1e0-6dfd75776c90',
        date:null,
        is_current_user:false,
       createdAt:"2022-04-03 12:45:05",
        updatedAt:"2022-04-03 12:45:05"
      },{
        doc_id:'5e7f88b9-1000-4f65-9c7f-bc4698c4e77f',
        customer_id:'2a9203fc-5392-42bd-b1e0-6dfd75776c90',
        date:null,
        is_current_user:true,
       createdAt:"2022-04-03 12:45:05",
        updatedAt:"2022-04-03 12:45:05"
      },{
        doc_id:'5e7f88b9-1100-4f65-9c7f-bc4698c4e77f',
        customer_id:'2a9203fc-5390-42bd-b1e0-6dfd75776c90',
        date:null,
        is_current_user:false,
       createdAt:"2022-04-03 12:45:05",
        updatedAt:"2022-04-03 12:45:05"
      },{
        doc_id:'5e7f88b9-1100-4f65-9c7f-bc4698c4e77f',
        customer_id:'2a9203fc-5391-42bd-b1e0-6dfd75776c90',
        date:null,
        is_current_user:false,
       createdAt:"2022-04-03 12:45:05",
        updatedAt:"2022-04-03 12:45:05"
      },{
        doc_id:'5e7f88b9-1100-4f65-9c7f-bc4698c4e77f',
        customer_id:'2a9203fc-5392-42bd-b1e0-6dfd75776c90',
        date:null,
        is_current_user:true,
       createdAt:"2022-04-03 12:45:05",
        updatedAt:"2022-04-03 12:45:05"
      },{
        doc_id:'5e7f88b9-1200-4f65-9c7f-bc4698c4e77f',
        customer_id:'2a9203fc-5390-42bd-b1e0-6dfd75776c90',
        date:null,
        is_current_user:false,
       createdAt:"2022-04-03 12:45:05",
        updatedAt:"2022-04-03 12:45:05"
      },{
        doc_id:'5e7f88b9-1200-4f65-9c7f-bc4698c4e77f',
        customer_id:'2a9203fc-5391-42bd-b1e0-6dfd75776c90',
        date:null,
        is_current_user:true,
       createdAt:"2022-04-03 12:45:05",
        updatedAt:"2022-04-03 12:45:05"
      },{
        doc_id:'5e7f88b9-1200-4f65-9c7f-bc4698c4e77f',
        customer_id:'2a9203fc-5392-42bd-b1e0-6dfd75776c90',
        date:null,
        is_current_user:false,
       createdAt:"2022-04-03 12:45:05",
        updatedAt:"2022-04-03 12:45:05"
      },{
        doc_id:'5e7f88b9-1300-4f65-9c7f-bc4698c4e77f',
        customer_id:'2a9203fc-5391-42bd-b1e0-6dfd75776c90',
        date:null,
        is_current_user:true,
       createdAt:"2022-04-03 12:45:05",
        updatedAt:"2022-04-03 12:45:05"
      },{
        doc_id:'5e7f88b9-1300-4f65-9c7f-bc4698c4e77f',
        customer_id:'2a9203fc-5392-42bd-b1e0-6dfd75776c90',
        date:null,
        is_current_user:false,
       createdAt:"2022-04-03 12:45:05",
        updatedAt:"2022-04-03 12:45:05"
      },{
        doc_id:'5e7f88b9-1400-4f65-9c7f-bc4698c4e77f',
        customer_id:'2a9203fc-5390-42bd-b1e0-6dfd75776c90',
        date:null,
        is_current_user:true,
       createdAt:"2022-04-03 12:45:05",
        updatedAt:"2022-04-03 12:45:05"
      },{
        doc_id:'5e7f88b9-1400-4f65-9c7f-bc4698c4e77f',
        customer_id:'2a9203fc-5391-42bd-b1e0-6dfd75776c90',
        date:null,
        is_current_user:false,
       createdAt:"2022-04-03 12:45:05",
        updatedAt:"2022-04-03 12:45:05"
      },{
        doc_id:'5e7f88b9-1500-4f65-9c7f-bc4698c4e77f',
        customer_id:'2a9203fc-5390-42bd-b1e0-6dfd75776c90',
        date:null,
        is_current_user:true,
       createdAt:"2022-04-03 12:45:05",
        updatedAt:"2022-04-03 12:45:05"
      },{
        doc_id:'5e7f88b9-1600-4f65-9c7f-bc4698c4e77f',
        customer_id:'2a9203fc-5392-42bd-b1e0-6dfd75776c90',
        date:null,
        is_current_user:true,
       createdAt:"2022-04-03 12:45:05",
        updatedAt:"2022-04-03 12:45:05"
      },{
        doc_id:'5e7f88b9-1700-4f65-9c7f-bc4698c4e77f',
        customer_id:'2a9203fc-5392-42bd-b1e0-6dfd75776c90',
        date:null,
        is_current_user:true,
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
     await queryInterface.bulkDelete('documentusers', null, {});
  }
};
