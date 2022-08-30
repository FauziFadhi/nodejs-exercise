import {addUsersHandler, showAllUserHandler, showDetailUserHandler,showUserByDateHandler} from './handlers.js'

const routes = [
    {
        method: 'POST',
        path: '/users',
        handler: addUsersHandler,
    },

    {
        method: 'GET',
        path: '/users',
        handler: showAllUserHandler,
    },

    {
        method: 'GET',
        path: `/users/{userName}`,
        handler: showDetailUserHandler,
    },
    {
        method : 'POST',
        path : '/users/date',
        handler : showUserByDateHandler,
    },
]

export default routes