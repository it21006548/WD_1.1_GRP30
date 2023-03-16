const mongoose = require("mongoose");

//connct the URI Code in .env file
const connectDB = async () => {
    try{
        const connect = await mongoose.connect()
    }catch (error) {

    }
}

module.exports = connectDB