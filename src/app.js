const express = require("express");
const morgan = require("morgan");
const usersRouter = require("./routes/usersRoutes");
const loginRoutes = require("./routes/loginRoutes");



const server = express();

 server.use(express.json());
 server.use(morgan('dev'));


 server.use("/users", usersRouter);
//  server.use("/login", loginRoutes);

 server.get('/users', (req ,res) =>{
    res.send ("Hola  soy Maxi")

 })


module.exports = server;
