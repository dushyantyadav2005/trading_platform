const {Schema}=require("mongoose");

const OrderSchema=new Schema({
    name: String,
    qty: Number,
    // avg: 538.05,
    price: Number,
    mode:String,
});

module.exports={OrderSchema};