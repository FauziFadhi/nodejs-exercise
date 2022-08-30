const { nanoid } = require('nanoid');
const users = require('./users');

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

module.exports = { addUserHandler };