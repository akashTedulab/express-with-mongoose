const mongoose = require('mongoose')

let productSchema = new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
})

let productModel = mongoose.model('products', productSchema)

module.exports = productModel
