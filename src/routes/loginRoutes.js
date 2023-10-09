
const loginRouter = require ("express").Router();
const Users = require("../../models/users");
const { getLogin } = require("../controllers/loginController")


loginRouter.post('/', (req, res ) => {
    const body = req.body
    Users.create(body).then((createdUser)=>{
        res
        .status(201)
        .json({ok: true, message: "Usuario creado con exito",data: createdUser})
    }).catch((err)=>{
        res.status(400).json({false: "Error al crear el usuario",err})
    })
})





module.exports = loginRouter;
