import {addUsersHandler, showAllUserHandler, showDetailUserHandler,showUserByDateHandler,editUserByIdHandler,deleteUserByIdHandler} from './handlers.js'

const routes = [
    {
        method : 'POST',
        path : '/users',
        handler : addUsersHandler,
    },
    {
        method : 'GET',
        path : '/users',
        handler : showAllUserHandler,
    },
    {
        method : 'GET',
        path : `/users/{userName}`,
        handler : showDetailUserHandler,
    },
    {
        method : 'POST',
        path : '/users/date',
        handler : showUserByDateHandler,
    },
    {
        method : 'PUT',
        path : '/users/{userId}',
        handler : editUserByIdHandler
    },
    {
        method : 'DELETE',
        path : '/users/{userId}',
        handler : deleteUserByIdHandler
    }
]

export default routes