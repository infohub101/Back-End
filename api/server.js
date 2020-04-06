const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authentication = require('../auth/auth-middleware');
const authRouter = require('../auth/auth-router');
const userRouter = require('../database/userdatabase/user-router');
const apiRouter = require('../database/apidatabase/api-router');
const userApiRouter = require('../database/userapidatabase/userapi-router');
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/auth/userdatabase', authentication, userRouter);
server.use('/api/auth/apidatabase', authentication, apiRouter);
server.use('/api/auth/userapidatabase', authentication, userApiRouter);

server.get('/', (req, res) => {
    res.json({
        api: 'Infohub101 server is up and running'
    });
});

module.exports = server;