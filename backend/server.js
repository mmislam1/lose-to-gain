import express from "express";

const app = express()

app.get('/',(req,res)=>{res.send("Hi")})

const port=process.env.PORT || 5000; 

app.listen(port,()=>{console.log(`Serving at localhost:${port}`)})