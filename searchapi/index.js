const express = require('express')
require('./config')
const product = require('./product')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.get('/search/:key', async(req, res)=>{
    let data = await product.find({
        "$or": [
            {"name": {$regex: req.params.key}},
            {"category": {$regex: req.params.key}}
        ]
    })
    res.send(data)
})

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
})