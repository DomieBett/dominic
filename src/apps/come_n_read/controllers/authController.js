const BaseController = require('./baseController');
const UserController = require('./userController');
const jwtAuth = require('../lib/authentication/jwtAuth');

class AuthController extends BaseController {
    constructor() {
        super();
        this.userController = UserController;
    }

    register(req, res) {
        req.body.password = this.hashPassword(req.body.password);

        return this.userController.createUser(req, res).then((user) => {
            delete user.dataValues.password;
            return res.status(201).send(this.generateResponse(user));
        }).catch((error) => this.handleError(res, error));
    }

    login(req, res) {
        const email = req.body.email;
        const password = req.body.password;

        this.userController.getUserByEmail(email).then((user) => {
            var passwordIsValid = this.bcrypt.compareSync(password, user.password);

            if (!passwordIsValid) return res.status(401).send('Wrong email or password');

            delete user.dataValues.password;

            return res.status(200).send(this.generateResponse(user));
        }).catch((error) => this.handleError(res, error));
    }

    getUser(req, res) {
        const token = req.headers['token'];

        if (!token) return res.status(401).send('No token provided');

        const userId = jwtAuth.getUserIdFromToken(token);
        return this.userController.getUser(userId).then((user) => {
            delete user.dataValues.password;
            return res.status(200).send(user);
        });
    }

    generateResponse(user) {
        const auth = true;
        const token = jwtAuth.generateToken(user.id);

        return { auth, token, user };
    }

    hashPassword(password) {
        return password ? this.bcrypt.hashSync(password, 8) : null;
    }
}

module.exports = new AuthController();
