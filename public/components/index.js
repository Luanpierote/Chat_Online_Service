//FUNCIONANDO

import { sendMessage } from "./chat.js"

let input = document.getElementById('inputText');
let enviar = document.getElementById('buttonEnv');
const box = document.querySelector(".exibir");

let contador = 0;

//Arrow function que valida se o campo está vazio
const validarCampo = (text) => {
    return String(text).trim().length > 0;
}

function renderMensagem({ message, username }) {
    const date = new Date();

    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const min = date.getMinutes();

    

    //
    let p = document.createElement("p");
    p.textContent = `[${contador}][${day}/${month} ${hour}:${min}]- ${username}: ${message}`


    box.appendChild(p)
    box.scrollTop = box.scrollHeight // empurra o texto antigo para cima


    contador++;
}

function enviarMensagem() {
    if (validarCampo(input.value)) {
        
        //envia ao socket
        sendMessage(input.value);

        input.value = "";
    }
}

enviar.addEventListener("click", async () => {
    enviarMensagem();

});

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault(); //Evita quebra de linha inesperada
        enviarMensagem();
    }
})

//escuta mensagens vindas do socket
window.addEventListener("new-message", (e) => {
    const data = e.detail;
    renderMensagem(data);
})
