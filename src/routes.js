const { addUserHandler } = require('./handler');

const routes = [{
    method: 'POST',
    path: '/users',
    handler: addUserHandler,
}, ];

module.exports = routes;