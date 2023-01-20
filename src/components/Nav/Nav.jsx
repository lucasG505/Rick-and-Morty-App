import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";


export default function  Nav({onSearch, logOut}) {
    return (
        <>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/favorites">Favorites</NavLink>
            <NavLink to="/" onClick={logOut} >Log Out</NavLink>
            <SearchBar onSearch={onSearch} />
            <button onClick={()=>onSearch(Math.floor(Math.random()*826))}>Random</button>
        </>
    )
}