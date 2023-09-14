const express = require("express");
const morgan = require("morgan");
const usersRouter = require("./src/routes/usersRoutes");
const loginRoutes = require("./src/routes/loginRoutes");


const server = express();

 server.use(express.json());
 server.use(morgan('dev'));


 server.use("/users", usersRouter);
 server.use("/login", loginRoutes);



module.exports = server;
