module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define(
    'PostCategory',
    {
      categoryId: { 
        type: DataTypes.INTEGER,
        field: 'category_id',
      }, 
      postId: { 
        type: DataTypes.INTEGER,
        field: 'post_id',
      }  
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'posts_categories',
    },
  );
  
  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blog_posts',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  };

    return PostCategory;
  };