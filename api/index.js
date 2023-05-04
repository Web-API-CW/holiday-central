const express=require("express");

const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");

const packages=require('./routes/packages.js');

PORT=8080;
dotenv.config();

async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to DB");
    }catch(error){
        console.log("error-" + err);
    }
}

connect();

app.use('/packages', packages);

//middleware
app.use('/', function(req, res){
    res.send("welcome");
})

app.use('*', function(req, res){
    res.send('wildcard called');
})

app.listen(PORT, ()=>{
    console.log("backend is running");
});