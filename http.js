////Funcionando / Em desenvolvimento( O servidor liga e abre a página normalmente, porém o código de ativação do socket está incompleto)

import { createServer } from "http";
import express from 'express';
import cors from 'cors';
import path from "path"; //não foi necessário
import { Server } from 'socket.io'

import indexRoute from './routes/indexRoutes.js'

const app = express();
const server = createServer(app); // servidor HTTP
const io = new Server(server) // socket ligado ao servidor HTTP( o Socket.IO injeta automaticamente rotas HTTP no seu servidor.)

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/',indexRoute)

export { server,io};

// eventos do socket
//a mensagem ainda não é recebida
/*  io.on("connection", (socket) => {
  console.log("Usuário conectado:", socket.id);
});  */