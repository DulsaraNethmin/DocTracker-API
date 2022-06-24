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
      await queryInterface.bulkInsert('users', [{
        uuid:'2a9203fc-5350-42bd-b1e0-6dfd75776c90',
        name: 'Nethmin Dulsara',
        username:"nethmin@",
        password:'12345678',
        email:'nethmin@email.com',
        role:'Organization Owner',
        telephone:'0718807149',
        branch_id:'',
        createdAt:"2022-04-03 12:45:05",
        updatedAt:"2022-04-03 12:45:05",
        image_url:'https://nethmin-bucket.s3.ap-south-1.amazonaws.com/profile.png'
      },
      {
        uuid:'2a9203fc-5350-2014-b1e0-6dfd75776c90',
        name: 'Suchintha Jayasooriya',
        username:"suchintha@",
        password:'12345678',
        email:'suchintha@email.com',
        role:'Branch Owner',
        telephone:'0711123412',
        branch_id:'1356d36d-05ca-4a50-98bf-5a941355f418',
        createdAt:"2022-04-03 12:45:05",
        updatedAt:"2022-04-03 12:45:05",
        image_url:'https://nethmin-bucket.s3.ap-south-1.amazonaws.com/profile.png'
      },
      {
        uuid:'2a9203fc-5350-2000-b1e0-6dfd75776c90',
        name: 'Sangeeth Navodya',
        username:"sangeeth@",
        password:'12345678',
        email:'sangeeth@email.com',
        role:'Branch Owner',
        telephone:'0711123412',
        branch_id:'1356d36d-05ca-7800-98bf-5a941355f418',
        createdAt:"2022-04-03 12:45:05",
        updatedAt:"2022-04-03 12:45:05",
        image_url:'https://nethmin-bucket.s3.ap-south-1.amazonaws.com/profile.png'
      },
      {
        uuid:'2a9203fc-5350-2500-b1e0-6dfd75776c90',
        name: 'Harsha Amarasignhe',
        username:"harsha@",
        password:'12345678',
        email:'harsha@email.com',
        role:'Branch Owner',
        telephone:'0719088978',
        branch_id:'1356d36d-05ca-4000-98bf-5a941355f418',
        createdAt:"2022-04-03 12:45:05",
        updatedAt:"2022-04-03 12:45:05",
        image_url:'https://nethmin-bucket.s3.ap-south-1.amazonaws.com/profile.png'
      },
      {
        uuid:'2a9203fc-5350-3500-b1e0-6dfd75776c90',
        name: 'Chamodya Manawathilake',
        username:"chamodhya@",
        password:'12345678',
        email:'chamodhya@email.com',
        role:'Branch Owner',
        telephone:'0789086756',
        branch_id:'1356d36d-05ca-8000-98bf-5a941355f418',
        createdAt:"2022-04-03 12:45:05",
        updatedAt:"2022-04-03 12:45:05",
        image_url:'https://nethmin-bucket.s3.ap-south-1.amazonaws.com/profile.png'
      },
      {
        uuid:'2a9203fc-5350-4500-b1e0-6dfd75776c90',
        name: 'Chinthani Rankoth',
        username:"chinthani@",
        password:'12345678',
        email:'chinthani@email.com',
        role:'Branch Owner',
        telephone:'0789086756',
        branch_id:'1356d36d-05ca-5000-98bf-5a941355f418',
        createdAt:"2022-04-03 12:45:05",
        updatedAt:"2022-04-03 12:45:05",
        image_url:'https://images.squarespace-cdn.com/content/v1/5aee389b3c3a531e6245ae76/1531792846005-MYGZAOI0L93I3YJWHB6W/D75_5697-Edit.jpg'
      },{
        uuid:'2a9203fc-5350-2590-b1e0-6dfd75776c90',
        name: 'Bimsara perera',
        username:"bimsara@",
        password:'12345678',
        email:'bimsara@email.com',
        role:'Customer',
        telephone:'0719088978',
        branch_id:'1356d36d-05ca-4000-98bf-5a941355f418',
        createdAt:"2022-04-03 12:45:05",
        updatedAt:"2022-04-03 12:45:05",
        image_url:'https://nethmin-bucket.s3.ap-south-1.amazonaws.com/profile.png'
      },
      {
        uuid:'2a9203fc-5350-3590-b1e0-6dfd75776c90',
        name: 'Hashan Gimhana',
        username:"hashan@",
        password:'12345678',
        email:'hashan@email.com',
        role:'Customer',
        telephone:'0789086756',
        branch_id:'1356d36d-05ca-8000-98bf-5a941355f418',
        createdAt:"2022-04-03 12:45:05",
        updatedAt:"2022-04-03 12:45:05",
        image_url:'https://nethmin-bucket.s3.ap-south-1.amazonaws.com/profile.png'
      },
      {
        uuid:'2a9203fc-5350-4590-b1e0-6dfd75776c90',
        name: 'kasuni Nimsara',
        username:"kasuni@",
        password:'12345678',
        email:'kasuni@email.com',
        role:'Customer',
        telephone:'0789086756',
        branch_id:'1356d36d-05ca-5000-98bf-5a941355f418',
        createdAt:"2022-04-03 12:45:05",
        updatedAt:"2022-04-03 12:45:05",
        image_url:'https://nethmin-bucket.s3.ap-south-1.amazonaws.com/profile.png'
      },{
        uuid:'2a9203fc-5390-42bd-b1e0-6dfd75776c90',
        name: 'Sithmi Rashmika',
        username:"sithmi@",
        password:'12345678',
        email:'sithmi@email.com',
        role:'Customer',
        telephone:'0718807149',
        branch_id:'1356d36d-05ca-4a50-98bf-5a941355f418',
        createdAt:"2022-04-03 12:45:05",
        updatedAt:"2022-04-03 12:45:05",
        image_url:'https://nethmin-bucket.s3.ap-south-1.amazonaws.com/profile.png'
      },{
        uuid:'2a9203fc-5391-42bd-b1e0-6dfd75776c90',
        name: 'Akila Deshan',
        username:"akila@",
        password:'12345678',
        email:'akila@email.com',
        role:'Customer',
        telephone:'0718807149',
        branch_id:'1356d36d-05ca-4a50-98bf-5a941355f418',
        createdAt:"2022-04-03 12:45:05",
        updatedAt:"2022-04-03 12:45:05",
        image_url:'https://nethmin-bucket.s3.ap-south-1.amazonaws.com/profile.png'
      },{
        uuid:'2a9203fc-5392-42bd-b1e0-6dfd75776c90',
        name: 'Uthsara Thesera',
        username:"uthsara@",
        password:'12345678',
        email:'uthsara@email.com',
        role:'Customer',
        telephone:'0718807149',
        branch_id:'1356d36d-05ca-4a50-98bf-5a941355f418',
        createdAt:"2022-04-03 12:45:05",
        updatedAt:"2022-04-03 12:45:05",
        image_url:'https://nethmin-bucket.s3.ap-south-1.amazonaws.com/profile.png'
      },
      {
        uuid:'2a9203fc-5399-42bd-b1e0-6dfd75776c90',
        name: 'Viduranga Kadanamulla',
        username:"viduranga@",
        password:'12345678',
        email:'viduranga@email.com',
        role:'Customer',
        telephone:'0718807149',
        branch_id:'1356d36d-05ca-4a50-98bf-5a941355f418',
        createdAt:"2022-04-03 12:45:05",
        updatedAt:"2022-04-03 12:45:05",
        image_url:'https://nethmin-bucket.s3.ap-south-1.amazonaws.com/profile.png'
      },
      {
        uuid:'2a9203fc-5398-42bd-b1e0-6dfd75776c90',
        name: 'Kawshi Sithara',
        username:"kawshi@",
        password:'12345678',
        email:'kawshi@email.com',
        role:'Customer',
        telephone:'0718807149',
        branch_id:'1356d36d-05ca-4a50-98bf-5a941355f418',
        createdAt:"2022-04-03 12:45:05",
        updatedAt:"2022-04-03 12:45:05",
        image_url:'https://nethmin-bucket.s3.ap-south-1.amazonaws.com/profile.png'
      },
      {
        uuid:'2a9203fc-5350-2080-b1e0-6dfd75776c90',
        name: 'Dileepa Perera',
        username:"dileepa@",
        password:'12345678',
        email:'dileepa@email.com',
        role:'Customer',
        telephone:'0711123412',
        branch_id:'1356d36d-05ca-7800-98bf-5a941355f418',
        createdAt:"2022-04-03 12:45:05",
        updatedAt:"2022-04-03 12:45:05",
        image_url:'https://nethmin-bucket.s3.ap-south-1.amazonaws.com/profile.png'
      },{
        uuid:'2a9203fc-5350-2540-b1e0-6dfd75776c90',
        name: 'Priyantha de Silva',
        username:"piyantha@",
        password:'12345678',
        email:'priyantha@email.com',
        role:'Deliverer',
        telephone:'0719088978',
        branch_id:'1356d36d-05ca-4000-98bf-5a941355f418',
        createdAt:"2022-04-03 12:45:05",
        updatedAt:"2022-04-03 12:45:05",
        image_url:'https://nethmin-bucket.s3.ap-south-1.amazonaws.com/profile.png'
      },
      {
        uuid:'2a9203fc-5350-3560-b1e0-6dfd75776c90',
        name: 'Kusal Nuwan',
        username:"kusal@",
        password:'12345678',
        email:'kusal@email.com',
        role:'Deliverer',
        telephone:'0789086756',
        branch_id:'1356d36d-05ca-8000-98bf-5a941355f418',
        createdAt:"2022-04-03 12:45:05",
        updatedAt:"2022-04-03 12:45:05",
        image_url:'https://nethmin-bucket.s3.ap-south-1.amazonaws.com/profile.png'
      },
      {
        uuid:'2a9203fc-5350-4570-b1e0-6dfd75776c90',
        name: 'Jasith Nimsara',
        username:"jasith@",
        password:'12345678',
        email:'jasith@email.com',
        role:'Deliverer',
        telephone:'0789086756',
        branch_id:'1356d36d-05ca-5000-98bf-5a941355f418',
        createdAt:"2022-04-03 12:45:05",
        updatedAt:"2022-04-03 12:45:05",
        image_url:'https://nethmin-bucket.s3.ap-south-1.amazonaws.com/profile.png'
      },{
        uuid:'2a9203fc-5370-42bd-b1e0-6dfd75776c90',
        name: 'Deshani Dissanayake',
        username:"deshani@",
        password:'12345678',
        email:'deshani@email.com',
        role:'Deliverer',
        telephone:'0718807149',
        branch_id:'1356d36d-05ca-4a50-98bf-5a941355f418',
        createdAt:"2022-04-03 12:45:05",
        updatedAt:"2022-04-03 12:45:05",
        image_url:'https://nethmin-bucket.s3.ap-south-1.amazonaws.com/profile.png'
      },
      {
        uuid:'2a9203fc-5372-42bd-b1e0-6dfd75776c90',
        name: 'Uthpala Jayaweera',
        username:"uthpala@",
        password:'12345678',
        email:'uthpala@email.com',
        role:'Deliverer',
        telephone:'0718807149',
        branch_id:'1356d36d-05ca-4a50-98bf-5a941355f418',
        createdAt:"2022-04-03 12:45:05",
        updatedAt:"2022-04-03 12:45:05",
        image_url:'https://nethmin-bucket.s3.ap-south-1.amazonaws.com/profile.png'
      },
      {
        uuid:'2a9203fc-5373-42bd-b1e0-6dfd75776c90',
        name: 'Visal Sanchtha',
        username:"visal@",
        password:'12345678',
        email:'visal@email.com',
        role:'Deliverer',
        telephone:'0718807149',
        branch_id:'1356d36d-05ca-4a50-98bf-5a941355f418',
        createdAt:"2022-04-03 12:45:05",
        updatedAt:"2022-04-03 12:45:05",
        image_url:'https://nethmin-bucket.s3.ap-south-1.amazonaws.com/profile.png'
      },
      {
        uuid:'2a9203fc-5374-42bd-b1e0-6dfd75776c90',
        name: 'Prabasha Ravishanka',
        username:"prabasha@",
        password:'12345678',
        email:'prabasha@email.com',
        role:'Deliverer',
        telephone:'0718807149',
        branch_id:'1356d36d-05ca-4a50-98bf-5a941355f418',
        createdAt:"2022-04-03 12:45:05",
        updatedAt:"2022-04-03 12:45:05",
        image_url:'https://nethmin-bucket.s3.ap-south-1.amazonaws.com/profile.png'
      },
      {
        uuid:'2a9203fc-5350-2070-b1e0-6dfd75776c90',
        name: 'Nuwan Dharmasiri',
        username:"nuwan@",
        password:'12345678',
        email:'nuwan@email.com',
        role:'Deliverer',
        telephone:'0711123412',
        branch_id:'1356d36d-05ca-7800-98bf-5a941355f418',
        createdAt:"2022-04-03 12:45:05",
        updatedAt:"2022-04-03 12:45:05",
        image_url:'https://nethmin-bucket.s3.ap-south-1.amazonaws.com/profile.png'
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
     await queryInterface.bulkDelete('users', null, {});
  }
};
