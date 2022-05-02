const express = require('express')
const bodyparser = require('body-parser')
const { default: mongoose } = require('mongoose')
const config = require("./config")
const port = process.env.PORT||7070
const promorouter = require('./routes/promorouter')

const app = express()
app.use(bodyparser.urlencoded({extended:false}))

const url = config.mongoUrl;
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log('database connected succsessfully')
}).catch((err)=>{
    console.log(err);
})

app.use('/promo',promorouter)

app.get('/',(req,res)=>{
    res.send("hellooo")
})

app.listen(port,()=>{
    console.log('server running')
})