import { useState } from "react";
export default function SearchBar({onSearch}) {
   const [char,setChar]=useState('');
   const handleInput = (e)=>{
      setChar(e.target.value);
   }
   return (
      <div>
         <input type='search' onChange={handleInput} value={char}/>
         <button onClick={()=>{
            onSearch(char);
            setChar('');
         }}>Agregar</button>
      </div>
   );
}
