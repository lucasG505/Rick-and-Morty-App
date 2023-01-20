import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../redux/actions/actions"
export default function Card({ name, species, gender, image, id, onClose }) {
   const dispatch=useDispatch();
   const [isFav,setIsFav]=useState(false);
   const myFavorites=useSelector((state)=>state.myFavorites);
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   const handleFavorite =()=>{
      if(isFav){
         setIsFav(false);
         dispatch(actions.deleteFavorite(id));
      }else {
         setIsFav(true);
         dispatch(actions.addFavorite({ name, species, gender, image, id, onClose }));
      }
   }
   return (
      <div>
         {isFav?(<button onClick={handleFavorite}>❤️</button>): (<button onClick={handleFavorite}>🤍</button>)}
         <button onClick={onClose}>X</button>
         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img src={image} alt="" />
      </div>
   );
}
