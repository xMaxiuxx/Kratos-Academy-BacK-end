
const loginRouter = require ("express").Router();
const Users = require("../../models/users");
// const { getLogin } = require("../controllers/loginController")
const bcrypt = require ("bcryptjs");
const jsonwT = require("jsonwebtoken");

loginRouter.post('/register',async (req, res)=> {
    try {
        const {nickname,password,surname,age,weight,faixa,role,date,email} = req.body

         //Comprobar que el email tiene un formato válido
        if (!isValidEmail(email)) {
            return res.status(400).json({ error: "Email no válido" });
          }

         //Comprobar que la contraseña cumple con ciertos criterios de seguridad
        if (!isStrongPassword(password)) {
            return res.status(400).json({ error: "La contraseña debe tener al menos 8 caracteres y contener números y caracteres especiales" });
      }
        //existingUser hace la consulta que no se repitan ni nickname ni mail usando el operador OR
       const existingUser = await Users.findOne({$or: [{nickname},{email}] });
       if (existingUser) {
        return res.status(400).json({ error: "Usuario o email  ya existente" });

    }
            //Encripta la contraseña con un hash
        const hashedPassword = await bcrypt.hash(req.body.password, 12);

        const newUser = new Users({
            nickname,
            email,
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

    function isValidEmail(email) {
        // Utiliza una expresión regular para verificar si el email tiene un formato válido
        const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        //.test  ,Retorna true si existe una coincidencia entre la expresión regular y la cadena especificada; de lo contrario retorna false.
        return emailRegex.test(email);
      }
      
      function isStrongPassword(password) {
        // Verifica si la contraseña tiene al menos 8 caracteres, contiene números y caracteres especiales
        return password.length >= 8 && /[0-9]/.test(password) && /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);
      }
})

loginRouter.post('/', async (req, res) => {

    //Comprobar si nickname, o email existe 

    try {
        //Busca usuario por su nickname
      const user =  await  Users.findOne({ nickname: req.body.nickname})


        if(!user){
        // Si no se encuentra el usuario, devuelve un 401 (Unauthorized)
            return res.status(401).json({error: "Usuario incorrecto"});
        }
        // Compara la contraseña proporcionada con la contraseña almacenada en la base de datos
        const comparePass = bcrypt.compareSync(req.body.password, user.password)

        // Si la contraseña no coincide, devuelve un 401 (Unauthorized)
        if(!comparePass){
            return res.status(401).json({error: "Contraseña incorrecta"})
        }
        // retornamos un mensaje de succes si va todo bien y ademas el token unico
        return res.json({
            success: "Autenticacion  exitosa",
            token:createToken(user)})

        // return res.status(200).json({ message : "Autenticacion exitosa"})
    } catch (err) {
        console.error("Error al autenticar usuario",err);
        res.status(500).json({message: "Error interno del servidor..."})
    }
})
    // Creamos una funcion para crear un token 
    function createToken(user){
        const payload = {
            user_id: user.id,
            user_role: user.role
        }
        return jsonwT.sign(payload,"algun string")
    }


    
module.exports = loginRouter;
