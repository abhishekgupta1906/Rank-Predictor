const mongoose = require('mongoose');

const connectDB = async ()=>{
    try {
        const conn = mongoose.connect('mongodb+srv://21cs3051:QxRR9edAXYzq0ITK@cluster0.zv0if2k.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
          console.log(`MongoDB Connected: ${(await conn).connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit();
    }  
}

module.exports = connectDB;