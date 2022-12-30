import express from 'express'
import fs from 'fs';
import student from './routes/student.js'
import teacher from './routes/teacher.js'

const app = express();
const PORT = process.env.PORT || 3001
// fs.mkdirSync('routes')
// fs.writeFileSync("./routes/student.js", "")
// fs.writeFileSync("./routes/teacher.js", "")

app.use('/student', student)
app.use('/teacher', teacher)

app.get('/', (req,res)=>{
    res.send("hello")
})

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})