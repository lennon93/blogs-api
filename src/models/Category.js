module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define(
    'Category',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      name: { type: DataTypes.STRING },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'categories',
    },
  );  
    return Category;
  };