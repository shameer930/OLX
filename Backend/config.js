const mongoose=require("mongoose")
const { Await } = require("react-router-dom")

const connect=async ()=>{
   try{
    const response=await mongoose.connect("mongodb://127.0.0.1:27017/olx")
   console.log("connect succesfully mongodb")
   }
   catch(err)
   {
    console.log(err)
   }
}
module.exports=connect