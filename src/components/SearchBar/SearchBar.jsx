import style from "./SearchBar.module.css";
import React, { useState } from "react";


export default function SearchBar(props) {
   const {onSearch} = props

   const [id, setId] = useState("");

    const handleClick = (event) => {
      setId(event.target.value);
    }

   return (
     <div className= {style.container}>
       <div className= {style.inputWrapper}>
        <input onChange = {handleClick} placeholder= 'id to add...' className = {style.input} type='search' id='searchInput'/>
        <button  onClick={() => onSearch(id)}
        >Agregar</button>
       </div>
     </div>
   );
}
