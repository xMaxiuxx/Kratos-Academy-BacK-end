const { getUsers } = require("./userController");

const getLogin = (req, res) => {
     const {user , password} = req.body;
     const users = getUsers();
     const foundUser = users.find((userName)=> userName.user === user);
     if (!foundUser){
      return res.status(401).json({message: 'Usuario Desconocidoo'});
     }
     if(foundUser.password === password){
        if(foundUser.role === 'profe'){
          return res.json({messaje: 'OK',role:'profe'});
        }else if (foundUser.role === 'alumno'){
          return res.json({message: 'OK', role: 'alumno' })

        }
     }else{
      return res.status(401).json({message: 'Contraseña Incorrecta'});
     }
    
      };



module.exports = {
    getLogin,
}