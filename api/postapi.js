const dbConnect = require('./dbConnect')

const postapi = async (req,res)=>{
    let data = await dbConnect();
    let result = await data.insertOne (req.body)
    res.send(result)
}

module.exports = postapi