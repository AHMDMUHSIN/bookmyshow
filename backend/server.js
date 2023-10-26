import express from 'express';
import dotenv from 'dotenv';
import router from './router.js'
import connection from './connection.js';
dotenv.config()
const app=express();
app.use(express.json());
app.use("/BookMyShow",router);
connection().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("server started");
    })
}).catch((error)=>{
    console.log(error);
})