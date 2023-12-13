const mongoose=require('mongoose')

const loginSchema=mongoose.Schema({
    name:{type:String,default:""},
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    isActive:{type:Boolean,default:false}
})
module.exports=mongoose.model("User",loginSchema)