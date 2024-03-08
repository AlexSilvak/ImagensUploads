const routes=require("express").Router()
const multer=require('multer')
const multerConfig=require('./config/multer')
const Post =require('./models/Post')







const fs = require('fs');

// ...

// Middleware para criar o diretório se não existir
const createDirectory = (req, res, next) => {
    const directory = 'C:/arquivos/sys/backteste/tmp/';
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
    }
    next();
};





routes.get('/',(req,res)=>{

    return res.json({hello:'Rocket'}) 
    
})

routes.post("/posts",multer(multerConfig).single('file'), async(req,res)=>{
 const post = await Post.create({
 name:req.file.originalname,
 size:req.file.size,
 key:req.file.filename,
 url:'',
 })
    return res.json({hello:'Rocket'}) 
    
})

module.exports=routes