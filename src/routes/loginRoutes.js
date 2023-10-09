
const loginRouter = require ("express").Router();
const Users = require("../../models/users");
// const { getLogin } = require("../controllers/loginController")
const bcrypt = require ("bcryptjs")

loginRouter.post('/register',async (req, res)=> {
    try {
        const {nickname,password,surname,age,weight,faixa,role,date} = req.body
       const existingUser = await Users.findOne({ nickname });
       if (existingUser) {
        return res.status(400).json({ error: "El usuario ya existe" });

    }
            //Encripta la contraseña con un hash
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

loginRouter.post('/', async (req, res) => {

    //Comprobar si nickname, o mail existe 

    try {
        //Busca usuario por su nickname
      const user =  await  Users.findOne({ nickname: req.body.nickname})

        console.log(req.body.nickname);
        if(!user){
        // Si no se encuentra el usuario, devuelve un 401 (Unauthorized)
            return res.status(401).json({error: "Usuario no encontrado"});
        }
        // Compara la contraseña proporcionada con la contraseña almacenada en la base de datos
        const comparePass = bcrypt.compareSync(req.body.password, user.password)
        console.log(req.body.password)
        // Si la contraseña no coincide, devuelve un 401 (Unauthorized)
        if(!comparePass){
            return res.status(401).json({error: "Contraseña incorrecta"})
        }
        return res.status(200).json({ message : "Autenticacion exitosa"})
    } catch (err) {
        console.error("Error al autenticar usuario",err);
        res.status(500).json({message: "Error interno del servidor..."})
    }
})




module.exports = loginRouter;
