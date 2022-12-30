const getData = require('./getData')

let main = async() =>{
    let data = await getData()
    data = await data.find({}).toArray();
    console.log(data)
}
main()