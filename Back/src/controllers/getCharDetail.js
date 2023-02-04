const axios=require("axios");

const getCharDetail=(res, id)=>{
    axios.get(`https://rickandmortyapi.com/api/character/${id}`).then(response=>{
        let char = {
            image:response.data.image,
            name: response.data.name,
            gender: response.data.gender,
            species: response.data.species,
            status:response.data.status ,
            origin:response.data.origin
        }
        res.status(200).json(char);
    }).catch(err=>res.status(500).json({"error":err.message}));
}

module.exports={
    getCharDetail
}