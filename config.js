require ("dotenv").config()

 const PORT = process.env.PORT;
 const MONGODB_URI = process.env.MONGO_DB_URI


module.exports = {PORT, MONGODB_URI}