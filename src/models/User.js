module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
  'User',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: { 
      type: DataTypes.STRING,
      field: 'display_name', 
    },
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    image: { type: DataTypes.STRING },
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'users',
  },
); 

User.associate = (models) => {
  User.hasMany(models.BlogPost,
   { foreignKey: 'userId', as: 'user' });
};


  return User;
};
