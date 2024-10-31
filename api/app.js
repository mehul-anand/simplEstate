import express from "express";

const app = express();

console.log("hello")


app.listen(8800,()=>{
    console.log("the server is running!")
})