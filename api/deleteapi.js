const dbConnect = require('./dbConnect')
const mongodb = require('mongodb')

const deleteapi = async(req, res) => {
    let data = await dbConnect();
    let result = await data.deleteOne(
        {_id: new mongodb.ObjectId(req.params.id) }
    )
    res.send(result)
}

module.exports = deleteapi;