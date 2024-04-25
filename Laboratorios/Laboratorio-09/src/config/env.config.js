console.log(process.env.VARIABLE) //Output: HOLA
require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 3001,
    MONGO_URI: process.env.MONGO_URI,
}





