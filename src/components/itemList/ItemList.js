import React from "react";
import Item from "../item/Item";
import "./ItemList.css";




function ItemList({ items }) {
  return (
    <div className="cardContainer">
      {
        items.length > 0

          ? items.map((item) => (
            <Item
              id={item.id}
              key={item.id}
              imagenes={item.imagen}
              titulo={item.titulo}

            />
          ))
          :
          <div className="contenedorcargador">
            <div className="cargador">
            </div>
          </div>

      }
    </div>
  );
}

export default ItemList;