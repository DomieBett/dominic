module.exports = (sequelize, DataTypes) => {
    const Todo = sequelize.define('todos', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING,
    });

    Todo.associate = (models) => {
        Todo.hasMany(models.todoList);
    }

    return Todo;
}
