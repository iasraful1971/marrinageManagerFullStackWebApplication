const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");



//use middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


//config 
if(process.env.NODE_ENV!=="PRODUCTION"){
    require("dotenv").config({
        path:"backend/config/config.env"
    })}
  

// router
const AuthRouter = require("./routes/authRoute");
const ScheduleRouter= require("./routes/scheduleRoute");
app.use("/rest-api",AuthRouter);
app.use("/rest-api",ScheduleRouter);

app.use(express.static(path.join(__dirname,"../frontend/build")));
app.get("*",(req,res) =>{
    res.sendFile(path.resolve(__dirname,"../frontend/build/index.html"));
});


module.exports = app;