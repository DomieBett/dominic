module.exports = (app, db) => {
    app.get('/todos/:id/list', (req, res) => {
        db.todoList.findAll({
            where: {
                todoId: req.params.id
            }
        }).then((results) => res.json(results));
    }),

    app.get('/todos/:id/list/:listId', (req, res) => {
        db.todoList.findByPk(req.params.listId, {
            where: {
                todoId: req.params.id
            }
        }).then((results) => res.json(results));
    }),

    app.post('/todos/:id/list', (req, res) => {
        db.todoList.create({
            content: req.body.content,
            todoId: req.params.id
        }).then((result) => res.json(result));
    }),

    app.put('/todos/:id/list/:listId', (req, res) => {
        db.todoList.update({
            content: req.body.content
        },
        {
            where: {
                id: req.params.listId,
                todoId: req.params.id
            }
        }).then((results) => res.json(results));
    });

    app.delete('/todos/:id/list/:listId', (req, res) => {
        db.todoList.destroy({
            where: {
                id: req.params.listId
            }
        }).then((results) => res.json(results));
    })
}
