import express from 'express';
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import routers from './routes/user.routers.js';
const app=express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api/user/',routers);

const mongoString=process.env.DATABASE_URL;

    mongoose.connect(mongoString);
    const db=mongoose.connection;
    db.on('error',(error)=>{
        console.log(error);
    });
    db.once('connected',()=>{
        console.log('Database Connected!');
    });


var PORT=process.env.PORT || 8000;

app.listen(PORT,()=>{
    console.log('Server is running on http://localhost:'+PORT);
})