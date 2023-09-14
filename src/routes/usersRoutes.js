
// Creacion de rutas 
 //usuarios RUTA GET  para que me traiga todos los usuarios o busque por nombre
 // RUTA POST Crea usuario 
 // RUTA GET/:id para que me traiga al usuario que le estoy pidiendo en particular 
 // RUTA DELETE Elimina usuarios 
 const usersRouter = require ('express').Router();
 const { getUsers } = require("../controllers/userController")

usersRouter.get('/', (req, res) =>{
  try {
    const users = getUsers();
    res.status(200).json(users);
    
  } catch (error) {
    console.error("Error al obtener la lista de usuarios",error);
    res.status(500).json({message: 'Error interno del servidor'});
  }
});
 










 module.exports = usersRouter;