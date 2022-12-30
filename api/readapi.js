const dbConnect = require('./dbConnect')

const readapi = async (req,res)=>{
    let data = await dbConnect()
    data = await data.find().toArray()
    res.send(data)
}

module.exports = readapi