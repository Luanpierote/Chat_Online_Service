import { server } from "./http.js";
import "./socket.js";

const port = 3000;

server.listen(port, ()=>{console.log(`Servidor ligado na porta: http://localhost:${port}`)})