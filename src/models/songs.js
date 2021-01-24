const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class songs extends Model {
    static associate(models) {
      songs.belongsTo(models.albums, {
        foreignKey: 'songsid',
        onDelete: 'CASCADE',
      });
    }
  }
  songs.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'songs',
  });
  return songs;
};
