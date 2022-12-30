import express from 'express'
const app = express()
// import web from './routes/web.js'
const PORT = process.env.PORT || 3001
import middleware from './routes/middleware.js'

// app.use('/', web)

// app.use('/', middleware)

app.get('/home', middleware, (req, res)=>{
    let userData = {
        name:"akash",
        profession:"SDE",
        address:"badlapur"
    }
    res.send(userData.profession)
})

app.get('/search-by-location/:state/:city',(req,res)=>{
    const {state, city} = req.params
    res.send(`get infoarmation for specific user ${state} and city is ${city}`)
})

// app.get('*', (req, res)=>{
//     res.send("404")
// })

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
})