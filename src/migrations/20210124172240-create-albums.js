/* eslint-disable no-unused-vars */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('albums', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      albumid: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id',
          as: 'albumid',
        },
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('albums');
  },
};
