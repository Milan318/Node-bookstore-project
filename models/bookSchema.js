
const { default: mongoose } = require("mongoose");

let productSchema = new mongoose.Schema({
    b_name : {
        type : String,
        required : true,
    },
    b_price : {
        type : Number,
        required : true,
    },
    author : {
        type : String,
        required : true,
    },
    category : {
        type : String,
        required : true,
    },
},{
    timestamps:true,
})
const Product = mongoose.model("product",productSchema)
module.exports = Product;
