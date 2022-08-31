

export let list = [
    {
        id:8,
        name:"alfian",
        age:23,
        birthDate:"1998-10-26"
    }
]


let id_awal = 0;
function getId(){
    id_awal++
    return id_awal
}


function getTahun(dob){
    let sekarang = new Date()
    let tahunSekarang = sekarang.getFullYear()

    let lahir = new Date(dob)
    let tahunLahir = lahir.getFullYear()

    let umur = tahunSekarang-tahunLahir

    return umur
}


export function nameValidation(namaBaru,inputTanggal){
    let name = list.find((data)=>data.name == namaBaru)
    
    // validasi agar tidak ada nama user yang sama
    if (name){
        return "Nama yang diinput sudah dipakai. Silahkan Gunakan nama lain"
    }

    // auto increment untuk id
    getId()

    // menghitung umur user
    let umurUser = getTahun(inputTanggal)
    let user = {
        id:id_awal,
        name:namaBaru,
        age:umurUser,
        birthDate:inputTanggal
    }
    list.push(user)

    return "User Baru telah berhasil di input"

}


export function changeName(namaBaru,indexUser){
    let name = list.find((data)=>data.name == namaBaru)
    
    // validasi agar tidak ada nama user yang sama
    if (name){
        return "Nama yang diinput sudah dipakai. Silahkan Gunakan nama lain"
    }

    list[indexUser].name = namaBaru


    return "Nama telah berhasil di rubah"
}


export function changeTanggalLahir(tglLahirBaru,indexUser){

    let tglLahirLama = list[indexUser].birthDate

    if (tglLahirLama == tglLahirBaru){
        return "Tanggal Lahir tidak berubah"
    }

    list[indexUser].name = tglLahirBaru

    return "Tanggal lahir berhasil di rubah"
}






