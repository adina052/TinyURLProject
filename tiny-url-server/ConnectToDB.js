import mongoose from "mongoose"

//const uriLocal="mongodb+srv://adinak7549:6185219Ak!@cluster0.ikxiv1u.mongodb.net/"
const uriLocal=process.env.DB_URI

const connectDB=async()=>{
    await mongoose.connect(uriLocal);
};
const database=mongoose.connection;

database.on('error',(error)=>{
    console.log(error)
})

database.once("connected",()=>{
    console.log("Database Connected")
})
export default connectDB;