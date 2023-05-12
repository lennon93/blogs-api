'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      }, 
      displayName: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'display_name',
      },
      email: {
        type: Sequelize.STRING,        
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,        
      },
      image: {
        type: Sequelize.STRING,        
      },  
    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
