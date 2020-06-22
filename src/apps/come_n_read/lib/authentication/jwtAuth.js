const jwt = require('jsonwebtoken');
const config = require('../../config/app');

class JWTAuth {
    generateToken(userId) {
        return jwt.sign(
            { id: userId },
            config.secret,
            { expiresIn: 86400 }
        );
    }

    getUserIdFromToken(token) {
        return jwt.verify(token, config.secret, (err, decoded) => {
            return decoded.id;
        });
    }
}

module.exports = new JWTAuth();
