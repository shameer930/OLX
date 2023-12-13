const express=require("express");
const app=express();



require('dotenv').config()
const PORT=3001;
const connect=require("./config")
const insertData=require("./insert")

// const express = require('express');
var cors = require('cors')
// const app = express();

app.use(cors());

var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
connect();
const userRoute=require("./routes/product.route")
app.use("/user/data",userRoute)
const loginRoute = require("./routes/use.route")
app.use("/login/user", loginRoute)

app.listen(PORT,()=>{
        console.log(`Server is running on ${PORT}`)
    }
)
// Function to insert data into the database
  // insertData()
 