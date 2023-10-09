const Users = require("../../models/users");


//  const getUsers = () => Users;

//  module.exports = {
//     getUsers

//  }

const getUsers = async () =>{
  try {
   const users = await Users.find()
   return users
  } catch (error) {
   throw error;
   
  }
}
module.exports = {
   getUsers
}

/*


const getUsers = async () => {
  try {
    // Utiliza el método de Mongoose para encontrar todos los usuarios en la base de datos
    const users = await Users.find();
    return users;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getUsers
};

*/