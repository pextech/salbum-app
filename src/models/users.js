const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    static associate(models) {
      users.hasMany(models.albums, {
        foreignKey: 'albumid',
        as: 'albums',
      });
    }
  }
  users.init({
    fullnames: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};
