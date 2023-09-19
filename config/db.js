const mongoose= require("mongoose") ;
const colors =require("colors")
const MONGO_URL="//localhost:27017/e-commerce-app"
const connectDB= async()=>{
try{
const conn= await mongoose.connect(MONGO_URL);

console.log(`data base is connected to host ${conn.connection.host}`.bgMagenta.white)
}catch(error){
console.log(`Error in db ${error}`.bgRed.white)
}
}

module.exports = connectDB;
