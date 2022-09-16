import "./Item.css";
import React from "react";
import { Link } from "react-router-dom";


function Item({ imagenes, titulo,id}) {
  let rutas = `/item/${id}`;
  return (
    <div className="itemCard">

      
      <div className="itemCard__btn">
        
        <img src={imagenes} alt={`imagen de ${titulo}`} className="img"/>
        <div className="itemCard__title">
        
           <h2>{`${titulo}`.toUpperCase()}</h2>
        </div> 
          
         <Link to= {rutas}> 
           <div className="verdetalle"> VER DETALLE </div>
        </Link>
      </div>

      
     
    </div>
  );
}

export default Item;