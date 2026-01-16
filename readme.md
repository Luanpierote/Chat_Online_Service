<h1 align="center">Chat Service — Projeto Pessoal </h1>

### Screenshot

![Preview do projeto](./assets/image.png)

## My Process

### **1. Baixe ou clone o repositório**
```sh
git clone https://github.com/Luanpierote/To-do-List.git
cd To-do-List
```

## Built with

- HTML5 
- CSS3
- JavaScript (ES6 Modules)
- Socket.io
- Express
- Cors
- DOM
- Desktop-first workflow

## What i learned

Chat Service é um serviço de bate papo online, com comunicação integrada entre os usuários.

Sabe-se que o  WebSocket é um protocólo
de comunicação de rede, cujo suporte é disponibilizado nativamente nos navegadores. Responsável por garantir comunicação bidirecional de baixo nível entre Cliente e Servidor. 
Apesar do WebSocket ser mais baixo nível e performático, sua implementação exige maior controle manual de eventos, reconexão e fallback, o que reduz a intuitividade em projetos menores
Por isso, o framework Socket.io foi a alternativa escolhida, com intuito de abstrair estas responsabilidades e garantir um resultado satisfatório para este projeto de menor escala.

Algumas soluções que implementei no programa

```js
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
```

```js
socket.on("message", (data) => {
    //Salvar as mensagens

    const message = ({
      username: data.username,
      message: data.message,
      createdAt: new Date() //usar posteriormente
    });
```

## Continued development

Em breve, o sistema contará com um banco de dados compartilhado, que irá permitir com o usuário salve o log e o histórico de conversas. 

## Author

- Website - [Luan](https://luanpierote.netlify.app/)
- GitHub - [@Luanpierote](https://github.com/LuanPierote)