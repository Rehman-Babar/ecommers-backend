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
    await mongoose.connect("mongodb://Raja_Rehman:raja0000@ac-yaeuxk0-shard-00-00.7zsqx6y.mongodb.net:27017,ac-yaeuxk0-shard-00-01.7zsqx6y.mongodb.net:27017,ac-yaeuxk0-shard-00-02.7zsqx6y.mongodb.net:27017/?ssl=true&replicaSet=atlas-wk738n-shard-0&authSource=admin&retryWrites=true&w=majority")
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