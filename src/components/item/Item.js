import "./Item.css";
import React from "react";


function Item({ imagenes, titulo, talles, colores, precio }) {
  return (
    <div className="itemCard">
      <div className="itemCard__btn">
        
        <img src={imagenes} alt={`imagen de ${titulo}`} className="img"/>
          <div className="verdetalle"> VER DETALLE </div>
        
      </div>

      <div className="itemCard__title">
        <h2>{`${titulo}`.toUpperCase()}</h2>
      </div>
      <div className="itemCard__description">
        <p>Talles: {talles}</p>
        <p>Colores: {colores}</p>
      </div>
      <div className="itemCard__precio">
        <h3> ${precio}</h3>
      </div>
    </div>
  );
}

export default Item;