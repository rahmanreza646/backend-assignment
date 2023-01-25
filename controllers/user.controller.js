import express from 'express';
import userModel from '../models/user.model.js';

// get all user
export const getAllUser=async(req,res)=>{
    try{
        const data=await userModel.find();
        res.json(data);
    }
    catch(error)
    {
        res.status(500).json({message:error.message});
    }
}

///get user using id
export const getUserById=async(req,res)=>
{
    const user=await userModel.findById(req.params.id);
    user.block=!user.block;
    user.save();
    res.json(user);
}

//post user
export const postUser=async(req,res)=>
{
    const data=new userModel(
        {
            f_name:req.body.f_name,
            l_name:req.body.l_name,
            email:req.body.email,
            phone:req.body.phone          
        });
    try
    {
        const value=await data.save();
        res.status(200).json(value);
    }

    catch(error)
    {
        res.status(400).json({message:error.message});
    }
}

//update user
export const updateUser=async(req,res)=>{
    try
    {
        const id=req.params.id;
        const updateData=req.body;
        const options={new: true};
        const result= await userModel.findByIdAndUpdate(id,updateData,options);
        res.send(result);
    }
    catch
    {
        res.status(400).json({message:"error!"});
    }
}

///delete user
export const deleteUser=async(req,res)=>
{
    try
    {
        const id=req.params.id;
        const data=await userModel.findByIdAndDelete(id);
        res.send('document has been deleted.');
    }
    catch(error)
    {
        res.status(400).json({message:error.message});
    }
    
}
