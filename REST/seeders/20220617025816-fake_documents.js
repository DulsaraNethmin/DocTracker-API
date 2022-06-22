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
     await queryInterface.bulkInsert('documents', [{
      uuid:'5e7f88b9-67b7-4f65-9c7f-bc4698c4e77f',
      doc_name: 'Assigment Report 2020',
      type:'Academid',
      date:null,
      branch_id:'1356d36d-05ca-4a50-98bf-5a941355f418',
      createdAt:"2022-04-03 12:45:05",
      updatedAt:"2022-04-03 12:45:05"
    },{
      uuid:'5e7f88b9-1000-4f65-9c7f-bc4698c4e77f',
      doc_name: 'Assigment Report 2021',
      type:'Academid',
      date:null,
      branch_id:'1356d36d-05ca-4a50-98bf-5a941355f418',
      createdAt:"2022-04-03 12:45:05",
      updatedAt:"2022-04-03 12:45:05"
    },{
      uuid:'5e7f88b9-1100-4f65-9c7f-bc4698c4e77f',
      doc_name: 'Assigment Report 2022',
      type:'Academid',
      date:null,
      branch_id:'1356d36d-05ca-4a50-98bf-5a941355f418',
      createdAt:"2022-04-03 12:45:05",
      updatedAt:"2022-04-03 12:45:05"
    },{
      uuid:'5e7f88b9-1200-4f65-9c7f-bc4698c4e77f',
      doc_name: 'Project Report 2020',
      type:'Project',
      date:null,
      branch_id:'1356d36d-05ca-4a50-98bf-5a941355f418',
      createdAt:"2022-04-03 12:45:05",
      updatedAt:"2022-04-03 12:45:05"
    },{
      uuid:'5e7f88b9-1300-4f65-9c7f-bc4698c4e77f',
      doc_name: 'Project Report 2021',
      type:'Project',
      date:null,
      branch_id:'1356d36d-05ca-4a50-98bf-5a941355f418',
      createdAt:"2022-04-03 12:45:05",
      updatedAt:"2022-04-03 12:45:05"
    },{
      uuid:'5e7f88b9-1400-4f65-9c7f-bc4698c4e77f',
      doc_name: 'Project Report 2022',
      type:'Project',
      date:null,
      branch_id:'1356d36d-05ca-4a50-98bf-5a941355f418',
      createdAt:"2022-04-03 12:45:05",
      updatedAt:"2022-04-03 12:45:05"
    },{
      uuid:'5e7f88b9-1500-4f65-9c7f-bc4698c4e77f',
      doc_name: 'Other Expenditures 2020',
      type:'Other',
      date:null,
      branch_id:'1356d36d-05ca-4a50-98bf-5a941355f418',
      createdAt:"2022-04-03 12:45:05",
      updatedAt:"2022-04-03 12:45:05"
    },{
      uuid:'5e7f88b9-1600-4f65-9c7f-bc4698c4e77f',
      doc_name: 'Other Expenditures 2021',
      type:'Other',
      date:null,
      branch_id:'1356d36d-05ca-4a50-98bf-5a941355f418',
      createdAt:"2022-04-03 12:45:05",
      updatedAt:"2022-04-03 12:45:05"
    },{
      uuid:'5e7f88b9-1700-4f65-9c7f-bc4698c4e77f',
      doc_name: 'Other Expenditures 2022',
      type:'Other',
      date:null,
      branch_id:'1356d36d-05ca-4a50-98bf-5a941355f418',
      createdAt:"2022-04-03 12:45:05",
      updatedAt:"2022-04-03 12:45:05"
    },{
      uuid:'5e7f88b9-2700-4f65-9c7f-bc4698c4e77f',
      doc_name: 'Other Expenditures 2022',
      type:'Other',
      date:null,
      branch_id:'1356d36d-05ca-7800-98bf-5a941355f418',
      createdAt:"2022-04-03 12:45:05",
      updatedAt:"2022-04-03 12:45:05"
    },{
      uuid:'5e7f88b9-2800-4f65-9c7f-bc4698c4e77f',
      doc_name: 'Project Report 2022',
      type:'Other',
      date:null,
      branch_id:'1356d36d-05ca-7800-98bf-5a941355f418',
      createdAt:"2022-04-03 12:45:05",
      updatedAt:"2022-04-03 12:45:05"  
    },{
      uuid:'5e7f88b9-2900-4f65-9c7f-bc4698c4e77f',
      doc_name: 'Assigment Report 2022',
      type:'Academid',
      date:null,
      branch_id:'1356d36d-05ca-7800-98bf-5a941355f418',        createdAt:"2022-04-03 12:45:05",
      updatedAt:"2022-04-03 12:45:05"
    },{
      uuid:'5e7f88b9-1333-4f65-9c7f-bc4698c4e77f',
      doc_name: 'Annual Report 2019',
      type:'Report',
      date:null,
      branch_id:'1356d36d-05ca-4a50-98bf-5a941355f418',
      createdAt:"2022-04-03 12:45:05",
      updatedAt:"2022-04-03 12:45:05"
    },{
      uuid:'5e7f88b9-1334-4f65-9c7f-bc4698c4e77f',
      doc_name: 'Social Fund 2020',
      type:'Report',
      date:null,
      branch_id:'1356d36d-05ca-4a50-98bf-5a941355f418',
      createdAt:"2022-04-03 12:45:05",
      updatedAt:"2022-04-03 12:45:05"
    },{
      uuid:'5e7f88b9-1335-4f65-9c7f-bc4698c4e77f',
      doc_name: 'Overtime Report',
      type:'Employee',
      date:null,
      branch_id:'1356d36d-05ca-4a50-98bf-5a941355f418',
      createdAt:"2022-04-03 12:45:05",
      updatedAt:"2022-04-03 12:45:05"
    },{
      uuid:'5e7f88b9-1336-4f65-9c7f-bc4698c4e77f',
      doc_name: 'Chemical Equiepment Log',
      type:'Chemical',
      date:null,
      branch_id:'1356d36d-05ca-4a50-98bf-5a941355f418',
      createdAt:"2022-04-03 12:45:05",
      updatedAt:"2022-04-03 12:45:05"
    },{
      uuid:'5e7f88b9-1337-4f65-9c7f-bc4698c4e77f',
      doc_name: 'External Employees',
      type:'Employee',
      date:null,
      branch_id:'1356d36d-05ca-4a50-98bf-5a941355f418',
      createdAt:"2022-04-03 12:45:05",
      updatedAt:"2022-04-03 12:45:05"
    },{
      uuid:'5e7f88b9-1338-4f65-9c7f-bc4698c4e77f',
      doc_name: 'Delivery Charges',
      type:'Other',
      date:null,
      branch_id:'1356d36d-05ca-4a50-98bf-5a941355f418',
      createdAt:"2022-04-03 12:45:05",
      updatedAt:"2022-04-03 12:45:05"
    },{
      uuid:'5e7f88b9-1339-4f65-9c7f-bc4698c4e77f',
      doc_name: 'Fake News Leak 01',
      type:'News',
      date:null,
      branch_id:'1356d36d-05ca-4a50-98bf-5a941355f418',
      createdAt:"2022-04-03 12:45:05",
      updatedAt:"2022-04-03 12:45:05"
    },{
      uuid:'5e7f88b9-1340-4f65-9c7f-bc4698c4e77f',
      doc_name: 'Movie Report 2022 - Marvel',
      type:'Entertain',
      date:null,
      branch_id:'1356d36d-05ca-4a50-98bf-5a941355f418',
      createdAt:"2022-04-03 12:45:05",
      updatedAt:"2022-04-03 12:45:05"
    },{
      uuid:'5e7f88b9-1341-4f65-9c7f-bc4698c4e77f',
      doc_name: 'TV Series - DC',
      type:'Entertain',
      date:null,
      branch_id:'1356d36d-05ca-4a50-98bf-5a941355f418',
      createdAt:"2022-04-03 12:45:05",
      updatedAt:"2022-04-03 12:45:05"
    },{
      uuid:'5e7f88b9-1342-4f65-9c7f-bc4698c4e77f',
      doc_name: 'Jonny Depp Case',
      type:'Entertain',
      date:null,
      branch_id:'1356d36d-05ca-4a50-98bf-5a941355f418',
      createdAt:"2022-04-03 12:45:05",
      updatedAt:"2022-04-03 12:45:05"
    },{
      uuid:'5e7f88b9-1343-4f65-9c7f-bc4698c4e77f',
      doc_name: 'The killing Joke -01',
      type:'Entertain',
      date:null,
      branch_id:'1356d36d-05ca-4a50-98bf-5a941355f418',
      createdAt:"2022-04-03 12:45:05",
      updatedAt:"2022-04-03 12:45:05"
    },{
      uuid:'5e7f88b9-1344-4f65-9c7f-bc4698c4e77f',
      doc_name: 'Headless Man Joke',
      type:'Entertain',
      date:null,
      branch_id:'1356d36d-05ca-4a50-98bf-5a941355f418',
      createdAt:"2022-04-03 12:45:05",
      updatedAt:"2022-04-03 12:45:05"
    },{
      uuid:'5e7f88b9-1345-4f65-9c7f-bc4698c4e77f',
      doc_name: 'The killing Joke -02',
      type:'Entertain',
      date:null,
      branch_id:'1356d36d-05ca-4a50-98bf-5a941355f418',
      createdAt:"2022-04-03 12:45:05",
      updatedAt:"2022-04-03 12:45:05"
    },{
      uuid:'5e7f88b9-1346-4f65-9c7f-bc4698c4e77f',
      doc_name: 'Mad Max - 2015',
      type:'Entertain',
      date:null,
      branch_id:'1356d36d-05ca-4a50-98bf-5a941355f418',
      createdAt:"2022-04-03 12:45:05",
      updatedAt:"2022-04-03 12:45:05"
    },{
      uuid:'5e7f88b9-1347-4f65-9c7f-bc4698c4e77f',
      doc_name: 'The Broken System',
      type:'Security',
      date:null,
      branch_id:'1356d36d-05ca-4a50-98bf-5a941355f418',
      createdAt:"2022-04-03 12:45:05",
      updatedAt:"2022-04-03 12:45:05"
    },{
      uuid:'5e7f88b9-1348-4f65-9c7f-bc4698c4e77f',
      doc_name: 'Greates Criminal Minds',
      type:'Security',
      date:null,
      branch_id:'1356d36d-05ca-4a50-98bf-5a941355f418',
      createdAt:"2022-04-03 12:45:05",
      updatedAt:"2022-04-03 12:45:05"
    },{
      uuid:'5e7f88b9-1349-4f65-9c7f-bc4698c4e77f',
      doc_name: 'Hospital Charges',
      type:'Other',
      date:null,
      branch_id:'1356d36d-05ca-4a50-98bf-5a941355f418',
      createdAt:"2022-04-03 12:45:05",
      updatedAt:"2022-04-03 12:45:05"
    },{
      uuid:'5e7f88b9-1350-4f65-9c7f-bc4698c4e77f',
      doc_name: 'Educational Trip -2020',
      type:'Entertain',
      date:null,
      branch_id:'1356d36d-05ca-4a50-98bf-5a941355f418',
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
     await queryInterface.bulkDelete('documents', null, {});
  }
};
