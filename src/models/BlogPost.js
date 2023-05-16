module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define(
    'BlogPost',
    {
      id: { type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true },
      title: { type: DataTypes.STRING },
      content: { type: DataTypes.STRING },
      userId: { 
        type: DataTypes.INTEGER,
        field: 'user_id',
      },
      published: { type: DataTypes.DATE },
      updated: { type: DataTypes.DATE },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'blog_posts',
    },
  );
  
  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User,
     { foreignKey: 'userId', as: 'user' });
 };


    return BlogPost;
  };