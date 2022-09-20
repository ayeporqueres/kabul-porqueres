import "../../style/itemCount.css";

import React, { useState } from 'react';

export const ItemCount = ({ stock, inicial, onAdd }) => {
    const [contador, setContador] = useState(inicial);
   
    const disminuir = () => {
        setContador(contador - 1);
    }

    const aumentar = () => {
        setContador(contador + 1);
    }

    return (
        <div className="contador">
            <div className="boton">
                <button disabled={contador <= 0} onClick={disminuir}>-</button>
                <span className="numero">{contador}</span>
                <button disabled={contador >= stock} onClick={aumentar}>+</button>
            </div>
            
        {
            contador > 0 ?
            <button className="colorboton" onClick={()=>onAdd(contador)}> AGREGAR AL CARRITO </button> :
            <button className="colorboton" disabled> AGREGAR AL CARRITO </button> 

        
        }

             
           
            
           
          
        </div>
    )

}

export default ItemCount;