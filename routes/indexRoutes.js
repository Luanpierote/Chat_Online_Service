//Funcionando

import express from 'express'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get('/',(req,res)=>{
    /* console.log(req.headers);
    console.log(req.body); // todo conteúdo enviado      */ 

    res.sendFile(path.join(__dirname,'../public/main.html'))
});

//pensar como fazer uma stack de dados diferente,na criação de texto.

export default router;