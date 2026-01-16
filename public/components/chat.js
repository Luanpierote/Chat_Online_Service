//FUNCIONANDO

const socket = io();

const urlSearch= new URLSearchParams(window.location.search);
const username = urlSearch.get("username");
//const room = urlSearch.get("select_room");

//emit => emitir informação
//on => escutar alguma informação

//obs: ambos eu poderei utilizar tanto do lado do servidor quanto cliente
 

socket.emit("user",{
    username
});

function sendMessage(message){
    socket.emit("message", {
        message,
        username
    });
}

socket.on("message", (data) => {
    //dispara evento customizado para o front
   

    //REVISAR ESTA PARTE
    window.dispatchEvent(
        new CustomEvent("new-message", {detail:data})
    )

});

//Ainda não posso ver o histórico de mensagens
socket.on("message:history", (messages) => {
    //dispara evento customizado para o front
   messages.array.forEach(msg => {
    window.dispatchEvent(
        new CustomEvent("new-message", {detail:msg})
    );
   });
});

export {sendMessage}
