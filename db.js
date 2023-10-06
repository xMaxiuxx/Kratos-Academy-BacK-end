
const mongoose = require('mongoose')
const Schema = mongoose.Schema
require("./config")

//conexion Mongo DB 
mongoose
.connect(process.env.MONGO_DB_URL)
.then(()=>{
    console.log("Conexion Exitosa con Base de datos");
}).catch((err)=>{
    console.log("Error al conectar con la base de datos",{err})
})




        

