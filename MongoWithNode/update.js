const getData = require('./getData')

let update = async () => {
    let data = await getData()
    let result = await data.updateMany(
        {name: "xyz"}, { $set : {name:"zeno",price: 970, brand:"redmi"}}
        )
        console.log(result)
}

update() 