const express = require("express");
const mogoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
require("dotenv").config();
const app = express();

//port Number Assign
const port = process.env.port || 8000;

app.use(cors());
app.use(bodyParser.json());

//Database Connection URL
const URL = process.env.DB_URL;

mogoose.connect(URL,{
    useUnifiedTopology:true,
});

//Check the database connection
const connection = mogoose.connection;
connection.once("open",()=>{
    console.log("Database connect successfully!");
})

app.use("/details",require("./Routes/Thivanka/apiRoutes"));
 

//Display the working port
app.listen(port,()=>{
    console.log(`Server is up and running port: ${port}`)
})