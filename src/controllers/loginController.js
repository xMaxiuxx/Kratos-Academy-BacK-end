const { getUsers } = require("./userController");



const getLogin = (req,res) =>{
    const {name , password} = req.body;
    if (name === 'Aldo' && password === '123') {
        res.send('Inicio de sesión exitoso');
      } else {
        res.send('Inicio de sesión fallido');
      }

};

/*
if (!user) {
      return res.status(401).json({ message: 'Usuario desconocido' });
    }

    if (user.password === password) {
      // Si la contraseña es correcta, devuelve un mensaje "ok" y el rol correspondiente
      if (username === 'Aldo') {
        return res.json({ message: 'ok', role: 'profe' });
      } else if (username === 'Maxi') {
        return res.json({ message: 'ok', role: 'alumno' });
      }
    } else {
      // Si la contraseña es incorrecta, devuelve un mensaje de error
      return res.status(401).json({ message: 'Contraseña inválida' });
    }
  });
});



*/



module.exports = {
    getLogin,
}
