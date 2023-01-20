import { useState } from "react"
import { validate } from "./validation";


export function Form (props){
    const [userData,setUserData]=useState({username:'', password:''});
    const [errors,setErrors]=useState({username:'', password:''});


    const handleInputChange = (e)=>{
        setUserData({...userData, [e.target.name]:e.target.value});
        setErrors(validate({...userData, [e.target.name]: e.target.value}));
    }

    const handleSubmit = ()=>{
        props.login(userData);
        //setUserData({username:'', password:''});
    }

    return (
        <form onSubmit={()=>handleSubmit(userData)} >
            <label >Nombre de Usuario:</label>
            <input type="text" name="username" value={userData.username} onChange={handleInputChange} />
            {errors.username && <p>{errors.username}</p>}
            <label >Contraseña:</label>
            <input type="text" name="password" value={userData.password} onChange={handleInputChange} />
            {errors.password && <p>{errors.password}</p>}
            <button type="submit" >LOGIN</button>
        </form>
    )
}