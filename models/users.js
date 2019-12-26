"use strict";
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    "users",
    {
      fullname: DataTypes.STRING,
      username: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isUnique: function (value, next){
            var self = this;
            users.findOne({ where: { email: value }})
              .then(result => {
                // reject when different user use same email
                if (result === null) {
                  return next();
                 
                }else{
                  return next("email already in use!");
                }
               
              })
              .catch(err => next(err));
          }
        }
      },
      password: DataTypes.STRING,
      is_active: DataTypes.BOOLEAN
    },
    {}
  );
  users.associate = function(models) {
    users.hasMany(models.articles, {
      as: "articles",
      foreignKey: "user_id"
    });
    users.hasMany(models.comment, {
      as: "comment",
      foreignKey: "user_id"
    });
  };
  return users;
};
