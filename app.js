const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/AlienDBex'
const port = process.env.PORT || 8000;
const DB = 'mongodb+srv://SayaleeShinde:abc12345@cluster0.z3cel.mongodb.net/AlienDB?retryWrites=true&w=majority'

const app = express()

mongoose.connect((DB), {
    useNewUrlParse:true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('CONNECTION SUCCESSFUL..');
}).catch((err) => console.log('NO CONNECTION..'));

//mongoose.connect(url, {useNewUrlParser:true})
//const con = mongoose.connection

//con.on('open', () =>{
  //  console.log('connected..')
//})

app.use(express.json())

const alienRouter = require('./routes/aliens')
app.use('/aliens',alienRouter)

app.listen(port, () => {
    console.log('SERVER STARTED')
})
//app.listen(8000, () => {
  //  console.log('SERVER STARTED')
//})