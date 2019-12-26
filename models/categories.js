'use strict';
module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define('categories', {
    name_category: DataTypes.STRING
  }, {});
  categories.associate = function(models) {
    categories.hasMany(models.articles, {
      as: 'articles',
      foreignKey: 'category_id'
    })
  };
  return categories;
};