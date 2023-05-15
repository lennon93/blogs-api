const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const jwtConfig = {
    expiresIn: '10m',
    algorithm: 'HS256',
};

const verifyToken = (token) => jwt.verify(token, secret);

const createToken = (payload) => jwt.sign({ data: payload }, secret, jwtConfig);

module.exports = {
    verifyToken,
    createToken,
};