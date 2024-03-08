var express = require('express')
const morgan = require('morgan')
const mongoose=require('mongoose')
var app = express()

const porta=5000

mongoose.connect('mongodb://localhost:27017/upload',
{
    useNewUrlParser:true,
}
)

app.use(require('./routes'))

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))

app.listen(porta,()=>{ console.log( ` # Servidor Rodando na Porta:${porta} #`)})