const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/e-comm")

const ProductSchema = new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
})

let insertInDb = async () => {
    const ProductModel = mongoose.model('products', ProductSchema)
    const data = new ProductModel({name:"G55", price:390, brand:"xyz", category:"others"})
    const result = await data.save()
    console.log(result)
}

// insertInDb()

const updateInDb = async () => {
    const Product = mongoose.model('products', ProductSchema)
    const data = await Product.updateOne(
        {name:"G55"},
        {$set: {price:560}}
    )
    console.log(data)
}

// updateInDb()

const deleteInDb = async () =>{
    const Products = mongoose.model('products', ProductSchema)
    const data = await Products.deleteOne(
        {name:"m11 pro"}
    )
    console.log(data)
}

// deleteInDb()

const findInDb = async () =>{
    const Products = mongoose.model('products', ProductSchema)
    const data = await Products.find(
        {name:"G55"}
    )
    console.log(data)
}
// findInDb()