import express from 'express';
const app = express();
const PORT = process.env.PORT || '3000';

app.get('/', (req, res)=>{
    res.send('Get Method')
});

app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})