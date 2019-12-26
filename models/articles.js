'use strict';
module.exports = (sequelize, DataTypes) => {
  const articles = sequelize.define('articles', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    image: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    is_published: DataTypes.BOOLEAN,
    is_archived: DataTypes.BOOLEAN,
    user_id: DataTypes.INTEGER
  }, {});
  articles.associate = function(models) {
    // association can be defined here
    articles.belongsTo(models.categories, {
      as: 'categories',
      foreignKey: 'category_id'
    }),
    articles.belongsTo(models.users,{
      as: 'users',
      foreignKey: 'user_id'
    }),
    articles.hasMany(models.comment,{
      as:'comment',
      foreignKey:'article_id'
    })
  
  };
  return articles;
};