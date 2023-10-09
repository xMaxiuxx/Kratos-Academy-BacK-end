
const loginRouter = require ("express").Router();
const Users = require("../../models/users");
// const { getLogin } = require("../controllers/loginController")
const bcrypt = require ("bcryptjs")





// //
loginRouter.post('/register',async (req, res)=> {
    try {
        const {nickname,password,surname,age,weight,faixa,role,date} = req.body
       const existingUser = await Users.findOne({ nickname });
       if (existingUser) {
        return res.status(400).json({ error: "El usuario ya existe" });

    }
        const hashedPassword = await bcrypt.hash(req.body.password, 12);

        const newUser = new Users({
            nickname,
            password: hashedPassword,
            surname,
            age,
            weight,
            faixa,
            role,
            date
        });
        await newUser.save();
        res.status(201).json({message: 'Usuario creado con exito'})
    } catch (err) {
        console.error("Error al Crear usuario",err);
        res.status(500).json({message: "Error interno del servidor"})
    }
})

module.exports = loginRouter;
