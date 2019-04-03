module.exports = (app, db) => {
    app.get('/todos', (req, res) => {
        db.todos.findAll().then((result) => res.json(result));
    });

    app.get('/todos/:id', (req, res) => {
        db.todos.findByPk(req.params.id).then((result) => res.json(result));
    })

    app.post('/todos', (req, res) => {
        db.todos.create({
            name: req.body.name
        }).then((result) => res.json(result));
    })

    app.put('/todos/:id', (req, res) => {
        db.todos.update({
            name: req.body.name
        },
        {
            where: {
                id: req.params.id
            }
        }).then((result) => res.json(result));
    })

    app.delete('/todos/:id', (req, res) => {
        db.todos.destroy({
            where: {
                id: req.params.id
            }
        }).then((result) => res.json(result));
    })
}
