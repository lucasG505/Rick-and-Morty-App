import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";


export function Detail(){
    const {detailId}=useParams();
    const [character,setCharacter]=useState({});
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);
    return (
        <>
            <Link to="/home" >
                <button>Back</button>
            </Link>
            <h2>{character?.name}</h2>
            <h2>{character?.status}</h2>
            <h2>{character?.specie}</h2>
            <h2>{character?.gender}</h2>
            <h2>{character?.origin?.name}</h2>
            <img src={character?.image} alt="cagada"/>
        </>
    )
}