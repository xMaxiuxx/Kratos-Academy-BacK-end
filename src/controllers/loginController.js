const {getUsers} = require ("./usersController");
const getLogin = (req, res) => {
  
    const {nickname,password} = req.body;
    
    //TODO: validar not null
    // console.log(req.body);
    const users = getUsers();
    
    const foundUser = users.find((user) => user.nickname === nickname);
    
    if(!foundUser){
        return res.status(404).json({message: 'Usuario Desconocido'});
    }
    if(foundUser.password === password){
        return res.json({id:foundUser.id, role:foundUser.role})
    }else{
        return res.status(401).json({message: 'Contraseña Incorrecta'});
    }
}

module.exports = {
    getLogin,
}