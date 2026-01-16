//FUNCIONANDO

let user = document.getElementById("username");
let enviar = document.getElementById('buttonEnv');
let register = document.getElementById('register');

function cadastrar(){
if(user){
    window.location = `./chat.html?username=${encodeURIComponent(username.value)}`;
}
    
}

register.addEventListener("submit",(e) =>{
    e.preventDefault();

    const username = user.value.trim();
    if(!username) return;

    console.log(username)
    //
    cadastrar();
});