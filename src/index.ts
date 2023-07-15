require('dotenv').config();

import express, { Request, Response } from 'express';
import { mongoConnect } from './services/mongo';
import cors from 'cors';
import morgan from 'morgan';


const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:4000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));
  
app.use(morgan('combined'));
app.get("*", (req:Request, res:Response, next)=>{
    res.send("hello bhaiya")
    next();
})

const PORT = process.env.PORT || 8000;
async function startServer() {
    await mongoConnect();
    console.log(`Listening on port ${PORT}`);
    app.listen(PORT, () => {
    });
}
  
startServer();
