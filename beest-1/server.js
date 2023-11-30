const express = require("express");
const app = express();
const productS = require('./routes/productroute');
const reviewS = require('./routes/reviewroute');

require("./connection/conn");
app.use(express.json());


app.use("/pro/v1",productS);
app.use("/pro/riv",reviewS);

app.listen(3000,()=>{
    console.log("SERVER STARTED");
});