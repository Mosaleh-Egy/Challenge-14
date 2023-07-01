const { User } = require('../models');


const userData = [
  {
    username: 'daniel1',
    password: 'test1'

  },
  {
    username: 'daniel2',
    password: 'test2'
  },
  {
    username: 'Kratos',
    password: 'demoGod'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;