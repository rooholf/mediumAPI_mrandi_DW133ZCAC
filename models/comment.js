'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    is_published: DataTypes.BOOLEAN,
    is_archived: DataTypes.BOOLEAN,
    user_id: DataTypes.INTEGER,
    article_id: DataTypes.INTEGER
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
  };
  return Comment;
};