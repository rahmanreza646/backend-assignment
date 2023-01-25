import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    
    f_name:
    {
        type:String,
        required:true
    },
    l_name:
    {
        type:String,
        required:true
    },
    email:
    {
        type:String,
        required:true
    },
    phone:
    {
        type:String,
        required:true
    },


    block:
    {
        type:Boolean,
        default:false
    }
})
const User=mongoose.model('user',userSchema);
export default User;