'use strict';
module.exports = (sequelize, DataTypes) => {
  const follow = sequelize.define('follow', {
    user_id: DataTypes.INTEGER,
    following_user_id: DataTypes.INTEGER
  }, {});
  follow.associate = function(models) {
    // follow.belongsTo (models.users,{
    //   as: 'users',
    //   foreignKey: ''
    // })
    // associations can be defined here
  };
  return follow;
};