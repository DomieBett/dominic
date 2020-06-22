'use strict';
module.exports = (sequelize, DataTypes) => {

  const Author = sequelize.define('Author', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: 'Please provide the author name'
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: 'Please provide a valid author description'
      }
    },
    website: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: {
          msg: 'Website needs to be a URL'
        }
      }
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {});

  Author.associate = function (models) {
    // associations can be defined here
  };

  return Author;
};
