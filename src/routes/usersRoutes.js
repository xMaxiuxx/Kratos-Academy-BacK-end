

 const usersRouter = require ('express').Router();
 const Users = require('../../models/users');
 const { getUsers } = require("../controllers/usersController");

usersRouter.get('/', (req, res) => {
   
    getUsers().then((users)=>{
        res.status(200).json(users)
    })
    .catch((err) => {
        console.error("Error al obtener la lista de usuarios",err);
        res.status(500).json({message:'Error interno del servidor...' })
    })
})

usersRouter.get('/:id',async (req, res)=>{
    try {
        const userId = req.params.id
        const user = await Users.findById(userId)
        if(!user){
            return res.status(404).json({message: 'Usuario no encontrado'});
        }
        return res.status(200).json(user)

    } catch (error) {
        console.error('Error al obtener usuario por ID',error);
        return res.status(500).json({message: "Error interno del Servidor..."})
    }
})







 module.exports =  usersRouter ;