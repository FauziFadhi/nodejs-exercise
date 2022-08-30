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
    const user = users.filter((n) => n.name === userName)[0]

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

    const user = users.filter((n) => n.birthDate <= dtTo && n.birthDate >= dtFrom)
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


export {addUsersHandler, showAllUserHandler, showDetailUserHandler,showUserByDateHandler}