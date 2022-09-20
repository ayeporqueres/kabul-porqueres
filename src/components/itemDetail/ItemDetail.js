import ItemCount from '../itemCount/ItemCount';
import "./itemDetail.css";
import {useState}  from 'react';
import { Link } from 'react-router-dom';



const ItemDetail = ({ item, flag }) => {
  const [controlBoton, setControlBoton] = useState(true);

  const onAdd = (valor) => {
    alert("Usted ha seleccionado " + valor + " productos");
    setControlBoton(false);
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
            <Link to='/Cart' className="linkcarrito"> Ir al carrito de compras </Link>
        }
      </div>

    </div> : <p className='cargando'>cargando...</p>
     }
  </>
  )}






  export default ItemDetail;