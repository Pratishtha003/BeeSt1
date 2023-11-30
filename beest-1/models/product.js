const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{type:String, required: true},
    des:{type:String, required: true},
    price:{type:Number , required:true},
    cat:{type:String, required: true},
    reviews:{type:Array,required:true}
});

module.exports = new mongoose.model("product",productSchema);

