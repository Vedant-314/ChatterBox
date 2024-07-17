const jwt = require('jsonwebtoken');

const config = process.env;

const verifySocketToken = (socket, next) => {
    const token = socket.handshake.auth?.token;

    try{
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        socket.user = decoded;
    } catch (err) {
        const socketError = new Error('NOT AUTHORISED');
        return next(socketError);
    }

    next();
}

module.exports = verifySocketToken;