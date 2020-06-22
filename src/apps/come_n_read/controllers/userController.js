const BaseController = require('./baseController');

class UserController extends BaseController {
    constructor() {
        super();
        this.user = this.models.User;
    }

    createUser(req, res) {
        return this.user.create(req.pick('firstName', 'lastName', 'email', 'password'));
    }

    isUserPassword(userId, password) {
        const user = this.getUser(userId);
        return user.password === password;
    }

    getUser(userId) {
        return this.user.findByPk(userId);
    }

    getUserByEmail(email) {
        return this.user.findOne({where: {email: email }});
    }
}

module.exports = new UserController();
