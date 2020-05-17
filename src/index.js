const express = require('express')
require('./db/studentDb')
const Student = require('./model/student')

const app = express()

app.use(express.json())

app.post('/students', (req,res) => {
    const student = new Student(req.body)
    student.save().then((student) =>{
        res.status(201).send(student)
    }).catch(e => {
        res.status(400).send(e)
    })
})


app.get('/students',(req,res) => {
    Student.find().then(student => {
        res.status(200).send(student)
    }).catch(e =>{
        console.log(e)
    })
})

app.get('/students/:name',(req,res) => {
    Student.findOne({name: req.params.name}).then(student => {
        if(!student){
            res.status(400).send()
        }
        res.status(200).send(student)
    }).catch(e =>{
        console.log(e)
    })
})



app.listen(3000, () =>{
    console.log('started server at port 3000!' )
})