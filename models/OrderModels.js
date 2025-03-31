const {model}=require("mongoose");

const {OrderSchema}=require("../schemas/OrderSchema")
const OrderModels=new model("oder",OrderSchema);

module.exports={OrderModels};