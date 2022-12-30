const allStudent =  (req, res)=>{
    res.send("Students home page")
    console.log(req.query)
}

const deleteStudent =  (req,res)=>{
    const {id} = req.params
    if(id == 10){
        res.send('This user cannot be delete')
    } else {
    res.send(`${id} Deleted`)
}}

export {allStudent, deleteStudent}