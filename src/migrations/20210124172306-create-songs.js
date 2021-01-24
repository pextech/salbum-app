/* eslint-disable no-unused-vars */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('songs', {
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
      songsid: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'albums',
          key: 'id',
          as: 'songsid',
        },
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('songs');
  },
};
