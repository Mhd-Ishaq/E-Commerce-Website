import express from "express";
const app = express();
import data from './data.js';
const port = process.env.PORT ||5000;

app.get('/api/products',(req,res)=>{
  res.send(data.products);
});

app.listen(port,()=>{
  console.log(`serving is running at "http://localhost:${port}"`)
})