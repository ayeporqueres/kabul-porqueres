import React from "react";
import "./Item.css";

function Item({ imagenes, titulo, talles, colores, precio }) {
  return (
    <div className="itemCard">
      <div className="itemCard__btn">
        <button title="Ver Detalle">
          <img src={imagenes} alt={`imagen de ${titulo}`} />
          <div className="detalle">
            <p>Ver Detalle</p>
          </div>
        </button>
      </div>

      <div className="itemCard__title">
        <h3>{`${titulo}`.toUpperCase()}</h3>
      </div>
      <div className="itemCard__description">
        <p>Talles: {talles}</p>
        <p>Colores: {colores}</p>
      </div>
      <div className="itemCard__precio">
        <h3>Precio: ${precio}</h3>
      </div>
    </div>
  );
}

export default Item;