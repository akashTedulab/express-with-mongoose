const {MongoClient} = require('mongodb')
const databse = 'e-comm';
const url = "mongodb://localhost:27017"
const client = new MongoClient (url);

async function getData(){
    const result = await client.connect()
    const db = result.db(databse);
    return db.collection('products')
}

module.exports = getData;
