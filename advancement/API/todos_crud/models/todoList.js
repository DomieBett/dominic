module.exports = (sequelize, DataTypes) => {
    const TodoList = sequelize.define('todoList', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        content: DataTypes.STRING,
    });

    TodoList.associate = (models) => {
        TodoList.belongsTo(models.todos)
    }

    return TodoList;
}
