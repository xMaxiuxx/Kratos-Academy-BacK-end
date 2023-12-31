
//TODO Creamos un Schema de mongoose dice que propiedades y tipo de datos va a tener nuestras entidades 

const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
        nickname:{
        type:String,
        required: true,
        unique:false,
        },
        password :{
        type:String,
        required: true
        },
        surname :{
        type:String,
        required: true,
        unique:false
        },
        age:{
        type:Number,
        required: true,
        unique:false
        },
        weight :{
        type: String,
        required: true,
        unique:false
        },
        faixa :{
        type:String,
        required: true,
        unique:false
        },
      
        role :{
        type:String,
        required: true
        },
    
        date :{
        type:String,
        required: true
        }
})

const Users = mongoose.model('USERS',usersSchema)
// quita el "._id" / "".__v" del objeto Json que crea el modelo;
usersSchema.set('toJSON', {
        transform: (document, returnedObject) => {
          returnedObject.id = returnedObject._id
          delete returnedObject._id
          delete returnedObject.__v
      
        }
      })
      

// Exportamos modelo Users
module.exports = Users