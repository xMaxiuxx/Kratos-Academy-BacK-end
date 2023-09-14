
const server = require("./app");
const {parse, stringify, toJSON, fromJSON} = require('flatted');


const PORT = 3001;

server.listen(PORT,() => {
    console.log("Funcionando en el puerto", PORT ) 
})
