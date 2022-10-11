import ItemCount from '../itemCount/ItemCount';
import "./itemDetail.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "../cartContext/CartContext";




const ItemDetail = ({ item, flag }) => {
  const [controlBoton, setControlBoton] = useState(true);
  const contexto = useContext (CartContext)

  const onAdd = (valor) => {
    alert("Usted ha seleccionado " + valor + " productos");
    setControlBoton(false);
    contexto.addItem(item,valor) 
  }

  return (
    <>
      {flag ? <div>
        <div className='imagen'>
           <img src={item.imagen} alt="" /> 
        </div>
        <div className='contenedor'>
          <h1 className='titulo'>{item.titulo}</h1>
          <p className='detalle'>Sobre el producto: {item.detalle}</p>
          <p className="talles">Talles: {item.talles}</p>
          <p className="colores">Colores: {item.colores}</p>
          <p className="stock">Stock: {item.stock}</p>
          <p className='precio'> $ {item.precio}</p>

        </div>
        <div>
          {

            controlBoton ?

              <ItemCount stock={item.stock} inicial={0} onAdd={onAdd} /> :
              <Link to='/cart' className="linkcarrito"> Ir al carrito de compras </Link>
          }
        </div>

      </div> :

        <div className="contenedorcargador">
          <div className="cargador">
          </div>
        </div>
      }
    </>
  )
}






export default ItemDetail;