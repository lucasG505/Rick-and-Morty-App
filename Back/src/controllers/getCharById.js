const axios=require("axios");

const getCharById=(res, id)=>{
    axios.get(`https://rickandmortyapi.com/api/character/${id}`).then(response=>{
        let char = {
            image:response.data.image,
            name: response.data.name,
            gender: response.data.gender,
            species: response.data.species
        }
        res.writeHead(200,{"Content-Type":"application/json"});
        res.end(JSON.stringify(char));
    }).catch(err=>res.writeHead(500,{"Content-Type":"text/plain"}).end(err.message));
}

module.exports={
    getCharById
}