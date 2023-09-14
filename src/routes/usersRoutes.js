

 const usersRouter = require ('express').Router();
 const { getUsers } = require("../controllers/usersController");

usersRouter.get('/', (req, res) =>{
    try {

       const users = getUsers();
      return   res.status(200).json(users);
       
    } catch (error) {
        console.error("Error al obtener la lista de usuarios ", error);
       return res.status(500).json({message: 'Error interno en el Servidor'});
        
    }
})
 

 module.exports = usersRouter;