const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    content:{type:String, required: true},
    rating:{type:Number, required: true},
    author:{type:String , required:true},
    createdAt:{type:String, required: true},
});

module.exports = new mongoose.model("review",reviewSchema);