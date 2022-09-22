import { useContext } from "react";
import { CartContext } from "../cartContext/CartContext";
import "./Cart.css";

const Cart = () =>{
    const contexto = useContext (CartContext);
    
    return(
        
        <>
        <h1> Soy el carrito </h1>
        <button onClick={contexto.clear}> Borrar todos los productos</button>
        {
            contexto.cartList.map (item => <li>
                <div className='imgcarrito'>
                  <img src= {item.imagen} alt=""/>
                </div>
                <div className="buttonremove">
                <p>{item.titulo}</p> 
                <p><button onClick={()=>contexto.removeItem(item.id)}> borrar el producto</button> </p>
                </div>
                <div className="qty">
                {item.qty}
                ${item.precio}
                </div>
                
                </li>)
        }
        </>
    );

}

export default Cart;