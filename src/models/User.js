module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
  'User',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.INTEGER,
    image: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    underscored: true,
  },
);  
  return User;
};
