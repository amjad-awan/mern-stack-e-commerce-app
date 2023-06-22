import mongoose from "mongoose";
import colors from "colors"
const connectDB= async()=>{
try{
const conn= await mongoose.connect("mongodb+srv://amjadmalikf53:sb9om1oUz5lNUjeq@cluster0.fl1mjop.mongodb.net/ecommerce");

console.log(`data base is connected to host ${conn.connection.host}`.bgMagenta.white)
}catch(error){
console.log(`Error in db ${error}`.bgRed.white)
}
}

export default connectDB
