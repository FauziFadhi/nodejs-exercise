const { nanoid } = require('nanoid');
const users = require('./users');

// Method CREATE Users
const addUserHandler = (request, h) => {
    const { name, age, birthDate } = request.payload;

    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const newUser = {
        name,
        age,
        birthDate,
        id,
        createdAt,
        updatedAt,
    };

    users.push(newUser);
    const isSuccess = users.filter((user) => user.id === id).length > 0;
    if (isSuccess) {
        const response = h.response({
            status: 'success',
            message: 'Users has been added',
            data: {
                userId: id,
            },
        });
        response.code(201);
        return response;
    }
    const response = h.response({
        status: 'fail',
        message: 'Failed to add Users',
    });
    response.code(500);
    return response;
};

// Method READ Users
const getAllUsersHandler = () => ({
    status: 'success',
    data: {
        users,
    },
});

const getUserByNameHandler = (request, h) => {
    const { name } = request.params;

    const user = users.find((n) => n.name === name)
    if (user !== undefined) {
        return {
            status: 'success',
            data: {
                user,
            },
        };
    }
    const response = h.response({
        status: 'fail',
        message: 'User not found',
    });
    response.code(404);
    return response;
};

const getUserByBirthDateHandler = (request, h) => {
    const { dtFrom, dtTo } = request.payload

    const user = users.filter((n) => n.birthDate >= dtFrom && n.birthDate <= dtTo)

    if (user !== undefined) {
        return {
            status: 'success',
            data: {
                user,
            },
        };
    }
    const response = h.response({
        status: 'fail',
        message: 'User with range birrtDate not found',
    });
    response.code(404);
    return response;
};

// Method UPDATE 
const editUserByIdHandler = (request, h) => {
    const { id } = request.params;

    const { name, age, birthDate } = request.payload;
    const updatedAt = new Date().toISOString();

    const index = users.findIndex((user) => user.id === id);

    if (index !== -1) {
        users[index] = {
            ...users[index],
            name,
            age,
            birthDate,
            updatedAt,
        };
        const response = h.response({
            status: 'success',
            message: 'User has been updated',
        });
        response.code(200);
        return response;
    }
    const response = h.response({
        status: 'fail',
        message: 'Fail to update. ID not found',
    });
    response.code(404);
    return response;
};

// Method DELETE 
const deleteUserByIdHandler = (request, h) => {
    const { id } = request.params;

    const index = users.findIndex((user) => user.id === id);

    if (index !== -1) {
        users.splice(index, 1);
        const response = h.response({
            status: 'success',
            message: 'User deleted',
        });
        response.code(200);
        return response;
    }

    const response = h.response({
        status: 'fail',
        message: 'Fail to delete. Id not found',
    });
    response.code(404);
    return response;
};

module.exports = {
    addUserHandler,
    getAllUsersHandler,
    getUserByNameHandler,
    getUserByBirthDateHandler,
    editUserByIdHandler,
    deleteUserByIdHandler
};