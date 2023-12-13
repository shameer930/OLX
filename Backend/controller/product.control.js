const User=require('../models/productmodel');
exports.store=async (req,res)=>{
try{
    const payload=req.body;
    const user=await User.create(payload)
    res.json({
        message:"fetch done",status:200,user})
}
catch(err)
{
    console.log(err);
}
}
exports.index=async (req,res)=>{
    try{
        const users=await User.find();
        res.json({users})
        
    }
    catch(err)
    {
        console.log(err)
    }
    }
exports.get=async (req,res)=>{
    try{
        const id=req.params.id;
        const users=await User.findOne({_id:id});
        res.json({users})
    }
    catch(err)
    {
        console.log(err)
    }
    }
    exports.destroy=async (req,res)=>{
        try{
            const id=req.params.id
            const users=await User.findOneAndDelete({_id:id});
            if(!users){
            res.json({message:"User not found"})
            }
             res.json({
                message:"fetch done",status:200,})
        }
        catch(err)
        {
            console.log(err)
        }
        }
         exports.update=async (req,res)=>{
        try{
            const id=req.params.id
            const users=await User.findOneAndUpdate({_id:id},req.body,{new:true});
            if(!users){
            res.json({message:"User not found"})
            }
             res.json({
                message:"fetch done",status:200,users})
        }
        catch(err)
        {
            console.log(err)
        }

       }

