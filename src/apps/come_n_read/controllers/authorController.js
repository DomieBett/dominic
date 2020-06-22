const BaseController = require('./baseController');

class AuthorController extends BaseController {

    constructor() {
        super();
        this.author = this.models.Author;
    }

    list(req, res) {
        return this.author.findAll().then((results) => {
            res.status(200).send(results);
        });
    }

    create(req, res) {
        return this.author.create(req.pick('name', 'description', 'website', 'avatar'))
            .then((author) => {
                res.status(201).send(author);
            })
            .catch((error) => this.handleError(res, error));
    }
}

module.exports = new AuthorController();
