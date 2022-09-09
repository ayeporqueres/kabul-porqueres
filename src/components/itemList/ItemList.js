import React from "react";
import Item from "../item/Item";



function ItemList({ items }) {
  return (
    <div className="cardContainer">
      { 
      items.length > 0

      ? items.map((item) => (
        <Item
          key={item.id}
          imagenes={item.imagen}
          titulo={item.titulo}
          talles={item.talles}
          colores={item.colores}
          precio={item.precio}
        />
      ))
    : <p> cargando...</p>
    }
    </div>
  );
}

export default ItemList;