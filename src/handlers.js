import users from './users.js'

const addUsersHandler = (request,h) => {
    const {name,age,birthDate} = request.payload

    let id = 0
    for(let i=0;i<users.length;i++){
       id++ 
    }

    const addUsers = {
        id,name,age,birthDate
    };

    const isFailedName = addUsers.name == undefined || addUsers.name === '' || !addUsers.name

    const isFailedSameName = addUsers.name === users.find((n) => n.name === name)?.name
 
    const isFailedAge = addUsers.age == undefined || addUsers.age === '' || !addUsers.age

    const isFailedBirthDate = addUsers.birthDate == undefined || addUsers.birthDate === '' || !addUsers.birthDate
    
    const isSuccess = !isFailedName && !isFailedAge && !isFailedBirthDate && !isFailedSameName
    
    if(isFailedSameName){

        const response = h.response({
            status: 'fail',
            message: 'Gagal menambahkan user. Mohon isi Ganti nama user'
        })
        response.code(400)
        return response
    }

    else if(isFailedName){

        const response = h.response({
            status: 'fail',
            message: 'Gagal menambahkan user. Mohon isi nama user'
        })
        response.code(400)
        return response
    }

    else if(isFailedAge) {
        const response = h.response({
            status: 'fail',
            message: 'Gagal menambahkan user. Mohon isi Age user'
        })
        response.code(400)
        return response
    }

    else if(isFailedBirthDate) {
        const response = h.response({
            status: 'fail',
            message: 'Gagal menambahkan user. Mohon isi BirthDate user'
        })
        response.code(400)
        return response
    }
    
    else if(isSuccess) {
        users.push(addUsers)
        const response = h.response({
            status: 'success',
            message: 'User berhasil ditambahkan',
            data: {
                userId: id
            }
        })
        response.code(200)
        return response
    }
    
    else {
        const response = h.response({
            status: 'fail',
            message: 'user gagal ditambahkan',
        });
        response.code(500)
        return response
    }
}

const showAllUserHandler = () => ({
    status: 'success',
    data: {
        users : users.map((user) =>({'id': user.id, 'name': user.name, 'age' : user.age, 'birthDate' : user.birthDate}))
    }
})

const showDetailUserHandler = (request,h) => {
    const {userName} = request.params
    const user = users.find((n) => n.name === userName)

    if (user !== undefined){
        return {
            status: 'success',
            data: {
                user
            },
        };
    }

    const response = h.response({
        status: 'fail',
        message: 'User tidak ditemukan',
    })
    response.code(400)
    return response
}

const showUserByDateHandler = (request,h) => {
    const {dtFrom, dtTo} = request.payload

    const user = users.filter((n) => n.birthDate >= dtFrom && n.birthDate <= dtTo)

    if (user !== undefined){
        return {
            status: 'success',
            data: {
                user
            },
        };
    }

    const response = h.response({
        status: 'fail',
        message: 'User dengan date range tersebut tidak ditemukan',
    })
    response.code(400)
    return response
}

const editUserByIdHandler = (request,h) => {
    const{userId} = request.params

    const {name,age,birthDate} = request.payload

    const index = users.findIndex((user) => user.id == userId)

    const isFailedName = name === undefined || name === '' || !name

    const indexNegatif = index !== -1

    const isSuccess = indexNegatif && !isFailedName

    if(isFailedName){
        const response = h.response({
            status: 'fail',
            message: 'Gagal memperbarui user. Mohon isi nama user',
        })
        response.code(400)
        return response

    } else if(isSuccess){
        users[index] = {
            ...users[index],name,age,birthDate
        }

        const response = h.response({
            status: 'success',
            message: 'User berhasil diperbarui',
        });
        response.code(200)
        return response
    }

    const response = h.response({
        status: 'fail',
        message: 'Gagal memperbarui user. Id tidak ditemukan',
    });
    response.code(404)
    return response
}

const deleteUserByIdHandler = (request,h) => {
    const {userId} = request.params;
    const index = users.findIndex((user) => user.id == userId);

    if(index !== -1){
        users.splice(index,1)
        const response = h.response({
            status: 'success',
            message: 'user berhasil dihapus',
        });
        response.code(200)
        return response
    }

    const response = h.response({
        status: 'fail',
        message: 'user gagal dihapus. Id tidak ditemukan',
    });
    response.code(404)
    return response
}


export {addUsersHandler, showAllUserHandler, showDetailUserHandler,showUserByDateHandler, editUserByIdHandler,deleteUserByIdHandler}