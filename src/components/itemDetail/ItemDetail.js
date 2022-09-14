import ItemCount from '../itemCount/ItemCount';
import "./itemDetail.css";




const ItemDetail = ({ item,flag}) => {
  
  const onAdd = (valor) => {
    alert("Usted ha seleccionado " + valor + " productos")
  } 
  return (
  <>{flag?<div>
    <div className='imagen'>
      <img src={item.imagen} alt="" /> 
    </div>
    <div className='contenedor'>
      <h1 className='titulo'>{item.titulo}</h1>
      <p className='detalle'>Sobre el producto:{item.detalle}</p>
      <p className="talles">Talles:{item.talles}</p>
      <p className="colores">Colores:{item.colores}</p>
      <p className='precio'> ${item.precio}</p>
    </div>
    <ItemCount stock={5} inicial={1} onAdd={onAdd} />
  </div>: <div>cargando</div>}</>
  );
}

export default ItemDetail;