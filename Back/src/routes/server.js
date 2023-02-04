const http = require("http");
const {getCharById} = require ("../controllers/getCharById");
const {getCharDetail}=require("../controllers/getCharDetail");

http.createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin','*');
    let id=request.url.split("/").at(-1);
    if (request.url.includes("onsearch")) { 
        getCharById(res,id);
    }
    if(request.url.includes("detail")){
        getCharDetail(res, id);
    }
}).listen(3001, "localhost"); 