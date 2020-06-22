'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: 'First name is required'
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: 'Last name is required'
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          args: true,
          msg: 'Email: Email is required'
        },
        isEmail: {
          args: true,
          msg: 'Email Invalid email format provided'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: 'Password is required',
      }
    }
  }, {});
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};
