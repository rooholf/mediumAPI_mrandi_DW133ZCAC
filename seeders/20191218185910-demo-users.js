'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('users',[
    {
     fullname: 'Admin ini',
     username: 'admin',
     email: 'admin@mediumAPI.com',
     password:'admin'
    },
    {
      fullname:'User ini',
      username: 'user',
      email:'user@mediumAPI.com',
      password: 'user'
    },
    {
      fullname:'Muhammad Randi',
      username:'randi',
      email:'randi@mediumAPI.com',
      password:'randi'
    },
    {
      fullname:'John doe',
      username:'john',
      email:'john@mediumAPI.com',
      password:'john'
    }
   ],{})
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('users', null, {});
 
  }
};
