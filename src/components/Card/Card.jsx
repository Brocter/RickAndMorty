import React from "react";
import style from './Card.module.css'
import { Link } from "react-router-dom";


export default function Card(props) {
   const {character, onClose} = props
 
   return (
      <div className= {style.card}>
         <img className = {style.image} src={character.image} alt= {character.name} />
        <button className = {style.closeButt} onClick={() => onClose(character.id)}>X</button>
         <div className= {style.cardContent}>
            <Link to= {`detail/${character.id}`}>
            <h2 className= {style.nombre}>{character.name}</h2>
            </Link>
            <h3 className={style.especie}>{character.species}</h3>
            <h3 className={style.genero}>{character.gender}</h3>
         </div>
      </div>
      
   );
}
