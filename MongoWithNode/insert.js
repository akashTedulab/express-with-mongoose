const getData = require('./getData')

const insert = async () => {
    const db = await getData()
    const result = db.insertMany([
        {
            "name":"xyz",
            "brand" : "xyz",
            price: 270,
            category: "mobile"
        }, 
        {
            "name":"abc",
            "brand" : "abc",
            price: 300,
            category: "mobile"
        },
        {
            "name":"pqr",
            "brand" : "pqr",
            price: 400,
            category: "mobile"
        },
    ])
}

insert()