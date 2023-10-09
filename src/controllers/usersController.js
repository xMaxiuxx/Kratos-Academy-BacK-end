const Users = require("../../models/users");
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

