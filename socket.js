//Em desenvolvimento (Serviços sockets)

import { io } from "./http.js";

/* const socket = io("http://localhost:3000"); */

//Gerando conexão entre cliente e servidor
//Toda vez que um novo cliente acessa a aplicação, é gerado um novo socket para ele

//Armazenando informações recebidas

const users = [];

const messages = [];

io.on("connection", (socket) => {

  socket.on("user", data => {

    //impede que o mesmo usuário seja registrado no array varias vezes
    const exists = users.find(u => u.username === data.username);
    if (exists) {
      exists.socket_id = socket.id;
    } else {
      users.push({
        socket_id: socket.id,
        username: data.username
      });
      console.log(users);
    }

    socket.emit("messages:history", messages);

    //Boas vindas global
    socket.emit("message", {
      message: `${data.username} entrou na conversa.`,
      username: "Sistema"
    });

    socket.broadcast.emit("message", {
      message: `${data.username} entrou na conversa.`,
      username: "Sistema"
    });
  });

  socket.on("message", (data) => {
    //Salvar as mensagens

    const message = ({
      username: data.username,
      message: data.message,
      createdAt: new Date() //usar posteriormente
    });



    messages.push(message)

    //Enviar para os usuários presentes na sala
    io.emit("message", message);

  });
});


/* socket.on("connect", () => {
  console.log("Cliente conectado ao servidor:", socket.id);
}); */