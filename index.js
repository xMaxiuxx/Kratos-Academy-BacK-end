
require("./db")
const server = require("./app");
const { PORT,  } = require("./config")


  server.listen(PORT)
   console.log("Funcionando en el puerto", PORT);
   
