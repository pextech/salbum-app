const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class albums extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      albums.belongsTo(models.users, {
        foreignKey: 'albumid',
        onDelete: 'CASCADE',
      });
    }
  }
  albums.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'albums',
  });
  return albums;
};
