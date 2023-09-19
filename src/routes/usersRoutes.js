

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
 


        usersRouter.get ("/:id", (req ,res)=>{
            try {
                const userId = req.params.id;
                const users = getUsers();
                const user = users.find(user => user.id === userId)

                if(!user){
                    return res.status(404).json({message: 'Usuario no encontrado'});
                }

            return res.status(200).json(user)
                
            } catch (error) {
                console.error("Error al Obtener Usuario por ID ", error);
                return res.status(500).json({message: 'Error interno en el Servidor'});
            }
        })







 module.exports =  usersRouter ;