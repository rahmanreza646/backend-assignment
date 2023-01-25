import express from 'express';
import { getAllUser, getUserById, postUser, updateUser,deleteUser } from '../controllers/user.controller.js';

const routers=express.Router();

routers.get('/getall',getAllUser);
routers.get('/block/:id',getUserById);
routers.post('/new',postUser);
routers.patch('/update/:id',updateUser);
routers.delete('/delete/:id',deleteUser);

export default routers;