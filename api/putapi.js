const dbConnect = require('./dbConnect')

const putapi = async (req, res) =>{
    let data = await dbConnect();
    data = await data.updateOne(
        {name: req.params.name},
        {$set: req.body}
    )
    res.send(data)
}

module.exports = putapi