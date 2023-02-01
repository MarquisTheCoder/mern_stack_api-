const mongoose = require("mongoose")

mongoose.set('strictQuery', false);

const connectDatabase = async () => {
    try {
        let connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connection: ${connect.connection.host}`.green.underline);  
    } catch (error) {
       console.log(error);
       process.exit(1); 
    }
}

module.exports = {
    connectDatabase, 
}