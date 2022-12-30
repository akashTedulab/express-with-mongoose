const getData = require('./getData')

const deleteData = async () =>{
    const data = await getData()
    const result = await data.deleteMany(
        {name:"abc"}
    )
    console.log(result)
}
deleteData()