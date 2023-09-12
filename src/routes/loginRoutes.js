
const loginRoutes = require ("express").Router();
const { getUsers } = require("../controllers/controllerUser")


loginRoutes.post('/login', (req, res ) => {
    try {
        const {users} = req.query;
        if (!users) res.status(200).json(getUsers());
        
    } catch (error) {

    }
})
loginRoutes.get('/login', (req, res ) => {
    try {
        const {users} = req.query;
        if (!users) res.status(200).json(getUsers());
        
    } catch (error) {

    }
})





module.exports = loginRoutes;