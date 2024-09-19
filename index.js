const express = require('express');
const connect = require('./connection');
const student = require('./routes/student');
const app = express();
connect();
app.use(express.json());
app.use(student);


//localhost:3000/add/user

app.listen(3000,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Server is running on 3000")
    }
})