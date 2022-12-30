const express = require('express')
const app = express()
const dbConnect = require('./dbConnect')
const readapi = require('./readapi')
const postapi = require('./postapi')
const putapi = require('./putapi')
const deleteapi = require('./deleteapi')
const PORT = process.env.PORT || 3000

app.get('/', readapi)

app.use(express.json())

app.post('/', postapi)

app.put('/:name', putapi)

app.delete('/:id', deleteapi)

app.listen(PORT, ()=>{
    console.log(`app is running on http://localhost:${PORT}`)
})