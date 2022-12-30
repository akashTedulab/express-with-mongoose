import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.send('<h1>Hello wolrd </h1>')
})

app.listen(PORT, ()=>{
    console.log(`server running at localhost:${PORT}`)
})