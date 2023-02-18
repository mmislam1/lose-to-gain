import express from "express";
import mongoose from 'mongoose'
import dotenv from 'dotenv';
import userRouter from './routers/userRouter.js'

dotenv.config();
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const conn = process.env.DATABASE_URL

mongoose.connect(conn)

const database = mongoose.connection

// routers ...

app.use('/api/users', userRouter)




const port = process.env.PORT || 5000

app.listen(port, () => { console.log(`Serving at localhost:${port}`) })