const {getUsers} = require ("./usersController");

const getLogin = (req, res) => {
    const {user, password} = req.body;
    //TODO: validar not null
    // console.log(req.body);
    const users = getUsers();
    
    const foundUser = users.find((userName) => userName.user === user);
    if(!foundUser){
        return res.status(404).json({message: 'Usuario Desconocido'});
    }
    if(foundUser.password === password){
        return res.json({message: 'OK', role:foundUser.role})
    }else{
        return res.status(401).json({message: 'Contraseña Incorrecta'});
    }
}

module.exports = {
    getLogin,
}