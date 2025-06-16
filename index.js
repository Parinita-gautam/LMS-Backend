import express from "express";

import bookRouter from './routes/bookRoutes.js';
import { connectToDB } from "./config/db.js";
import authRoutes  from "./routes/userRoutes.js";

const app =express();
const PORT=5000;



connectToDB();

app.use(express.json());

app.get("/api/test",(req,res)=>{
    res.json({
        success:true,
        message:"This is test route",
    });
});



app.use("/api/books",bookRouter);

app.use('/api/auth',authRoutes);

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
});