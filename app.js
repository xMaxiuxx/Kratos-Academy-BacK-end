const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const usersRouter = require("./src/routes/usersRoutes");
const loginRoutes = require("./src/routes/loginRoutes");


const server = express();

 server.use(express.json());
 server.use(morgan('dev'));
 server.use(cors({
    origin:'*',
    credentials: true
 }));
 

 server.use("/users", usersRouter);
 server.use("/login", loginRoutes);
 server.use("/users/:userId", usersRouter);







module.exports = server;
