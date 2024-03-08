const path=require("path")
const multer = require("multer")
const crypto = require('crypto')




const multerConfig = {
    destination: 'C:/arquivos/sys/backteste/tmp/',
    filename: (req, file, cb) => {
        // ... código para gerar o nome do arquivo ...
    },
};

//======================================================================================================================================================
module.exports={

//======================================================================================================================================================    
dest:path.resolve(__dirname,'..','..','tmp'),
//======================================================================================================================================================
storage:multer.diskStorage({
 //======================================================================================================================================================   
destination:(req,file,cb)=>{
    cb(null,path.resolve(__dirname,'..','..','tmp'))
},
//======================================================================================================================================================
filename:(req,file,cb)=>{
    crypto.randomBytes( 16,(err,hash)=>{
        if(err)cb(err)
        const fileName=`${hash.toString('hex')}-${file.originalname}`;
    cb(null,fileName)
    })
},

}),
//======================================================================================================================================================
limits: {

    fileSize: 2 * 1024 * 1024, // 2 MB limit
},
//======================================================================================================================================================
fileFilter: (req, file, cb) => {

    const allowedMimes = [
        'image/jpeg',
        'image/jpeg',
        'image/png',
        'image/gif',
    ];

    if (allowedMimes.includes(file.mimetype)) {
        cb(null, true);
        console.log(req);

    } else {
        cb(new Error('Invalid File Type'));
    }
},
}