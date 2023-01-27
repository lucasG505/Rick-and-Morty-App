const http = require("http");
const characters = require ("../utils/data")

http.createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin','*');
    if (request.url.includes("rickandmorty/character")) { 
        let id=request.url.split("/").at(-1); 
        let pj=characters.find(char=>char.id===Number(id));
        if(pj){
            response.writeHead(200, {"Content-type":"application/json"});
            response.end(JSON.stringify(pj));
        }else{
            response.writeHead(404, {"Content-type":"text/plain"});
            response.end("No existe");
        }
    }
}).listen(3001, "localhost"); 