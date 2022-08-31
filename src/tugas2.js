import express from "express";

import {nameValidation,list,changeName,changeTanggalLahir} from "./controller.js";

const app = express();

const port = 3010


app.use(express.json());

app.get("/get/:id",(req,res)=>{
    let id = req.params.id
    let user = list.find((data)=>data.id == id)


    if (!user){
        res.send("Id User yang dicari tidak ada")
    }
    res.send(user)

})


app.post("/post",(req,res)=>{

   
    let name = req.body.name
    let birthDate = req.body.birthDate

    if (!name){
        res.send("tolong masukan nama")
    }

    if (!birthDate){
        res.send("tolong masukan tanggal lahir")
    }
    

    let hasilValidasi = nameValidation(name,birthDate)

    res.send(hasilValidasi)
    

    console.log(list);


})

app.delete("/delete/:id",(req,res)=>{

    let id = req.params.id
    let user = list.findIndex((data)=>data.id == id)


    if(user < 0 ){
        res.send("id user tidak ditemukan")
    }

    list.splice(user,1)
    res.send("user telah terdelete")
    console.log(list)

})

// inputan nama atau tanggal lahir baru menggunakan query param
app.put("/put/:id",(req,res)=>{


    let idInput = req.params.id
    
    console.log(idInput);

    // kalo misalnya id yang dicari tidak ada maka akan mengembalikan index -1
    let indexUser = list.findIndex((data)=> data.id == idInput)

    console.log(indexUser);


    if (indexUser < 0){
        res.send("ID user yang dicari tidak ada")
    }

    let namaBaru = req.query.name
    let tglLahirBaru = req.query.birthDate


    
    let responseChangeName = changeName(namaBaru,indexUser)
    let responsechangeTanggalLahir = changeTanggalLahir(tglLahirBaru,indexUser)

    res.send({
        id:responseChangeName,
        birthDate:responsechangeTanggalLahir
    })

    console.log(list);


    
    
    
    // let nama = req.query.name
    // let id = req.query.id

    // let index = list.findIndex((data)=>data.id == id)

    // list[index].name = nama

    // res.send(list)
    // console.log(list)

})







app.listen(port,function(){
    console.log(`server start at port ${port}`)

})