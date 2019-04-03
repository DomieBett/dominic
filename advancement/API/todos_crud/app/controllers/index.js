const todo = require('./todoController');
const todoList = require('./todoListController');

module.exports = (app, db) => {
    todo(app, db);
    todoList(app, db);
}
