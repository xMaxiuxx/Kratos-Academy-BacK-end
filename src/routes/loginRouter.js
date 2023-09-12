const loginRouter = require("express").Router();
const {getLogin} = require("../controllers/loginController");

loginRouter.post("/" , (req, res)=>{

    res.status(200).json(getLogin(req, res));
       

})



//   const { username, password } = req.body;
//   if (username === 'usuario' && password === 'contraseña') {
//     res.send('Inicio de sesión exitoso');
//   } else {
//     res.send('Inicio de sesión fallido');
//   }
// });



module.exports = loginRouter;

    
