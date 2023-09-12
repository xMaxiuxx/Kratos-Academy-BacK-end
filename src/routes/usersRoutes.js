
// Creacion de rutas 
 //usuarios RUTA GET  para que me traiga todos los usuarios o busque por nombre
 // RUTA POST Crea usuario 
 // RUTA GET/:id para que me traiga al usuario que le estoy pidiendo en particular 
 // RUTA DELETE Elimina usuarios 
 const usersRouter = require ('express').Router();
 const { getUsers } = require("../controllers/userController")

usersRouter.get('/', (req, res) =>{
    try {

       const {users} = req.query;
       if (!name) res.status(200).json(getUsers());
       
    } catch (error) {

    }
})
 












 module.exports = usersRouter;