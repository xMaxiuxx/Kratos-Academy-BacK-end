
const loginRouter = require ("express").Router();
const { getLogin } = require("../controllers/loginController")


loginRouter.post('/', (req, res ) => {
    try {
        return getLogin(req, res);
        
    } catch (error) {
        console.error("Error al obtener  usuarios ", error);
        res.status(500).json({message: 'Error interno en el Servidor'});
    }
})





module.exports = loginRouter;