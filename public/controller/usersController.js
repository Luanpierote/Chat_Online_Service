//Em desenvolvimento ( Gestão de usuários cadastrados)

import express from "express";

const app = express();


//Controle de usuários que acessam o sistema
app.get("/", (req,res)=>{


res.status(200).json({req})

})

//Criando novo usuário(com socket)