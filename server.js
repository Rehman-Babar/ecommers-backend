import express from 'express';
const app =express();
import cors from 'cors'
import mongoose from 'mongoose';
import router from './src/mvc/route/user.route.js';
import dotenv from 'dotenv';
dotenv.config();
const port =process.env.PORT || 3001;
const corsOptions={
    origin : '*',
    OptionsSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', router)

async function dbConnection (){
    await mongoose.connect(process.env.MONGO_URI)
    .then((res)=>{
        console.log('data base connected');
    }) .catch((err)=>{
        console.log('data base error', err);
    })
}
dbConnection();

app.listen(port, ()=>{
    console.log(`app running at port ${port}`);
})