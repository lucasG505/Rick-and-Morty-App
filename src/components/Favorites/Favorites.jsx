import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import * as actions from "../../redux/actions/actions";

export default function Favorites() {
    const myFavorites = useSelector((state) => state.myFavorites);
    const dispatch=useDispatch();
    const handleOrder =(e)=>{
        dispatch(actions.orderCards(e.target.value));
    }
    const handleFilter =(e)=>{
        dispatch(actions.filterCards(e.target.value));
    }
    useEffect(() => { }, [myFavorites]);
    return (
        <>
            <div>
                <select onChange={handleOrder}>
                    <option value="Ascendente" >Ascendente</option>
                    <option value="Descendente" >Descendente</option>
                </select>
                <select onChange={handleFilter} >
                    <option value="Male" >Male</option>
                    <option value="Female" >Female</option>
                    <option value="Genderless" >Genderless</option>
                    <option value="unknown" >Unknown</option>
                </select>
            </div>
            {myFavorites.map((fav) =>
                <div key={fav.id}>
                    <span>{fav.name}</span>
                    <img src={fav.image} alt={fav.name} />
                </div>
            )}
        </>
    )
}