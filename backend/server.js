import express from "express";
import mongoose from 'mongoose'
import dotenv from 'dotenv';

dotenv.config();
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/amazona')
app.get('/', (req, res) => { res.send("Hi") })

const port = process.env.PORT || 5000;

app.listen(port, () => { console.log(`Serving at localhost:${port}`) })