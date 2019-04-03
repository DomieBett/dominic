'use strict';

module.exports = {
  up: (queryInterface, Sequelize, done) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    queryInterface.addColumn('todoLists', 'todoId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'todos',
        key: 'id'
      }
    });
    done();
  },

  down: (queryInterface, Sequelize, done) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   queryInterface.removeColumn('todoLists', 'todoId');

   done();
  }
};
