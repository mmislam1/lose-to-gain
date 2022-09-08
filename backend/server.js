import express from "express";
import mongoose from 'mongoose'
const app = express()
mongoose.connect('mongodb://localhost/amazona')
app.get('/', (req, res) => { res.send("Hi") })

const port = process.env.PORT || 5000;

app.listen(port, () => { console.log(`Serving at localhost:${port}`) })