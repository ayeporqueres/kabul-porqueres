import { useContext } from "react";
import { CartContext } from "../cartContext/CartContext";
import "./Cart.css";

const Cart = () => {
    const contexto = useContext(CartContext);
    console.log(contexto.cartList)
    return (

        <>

            <h1 className="titulocarrito"> TU CARRITO </h1>

            <button onClick={contexto.clear}> Borrar todos los productos</button>
            {
                contexto.cartList.map(item => <li>
                    <div className='imgcarrito'>
                        <img src={item.imagen} alt="" />
                    
                        <table className='table'>
                        <tr>
                            <td>
                                <p>{item.titulo}</p>
                                <p><button onClick={() => contexto.removeItem(item.id)}> borrar el producto</button> </p>
                            </td>

                            <td>
                                <p>Items: {item.quantity}</p>
                                <p> $ {item.precio} </p>
                                </td>
                        </tr>
                    </table>
                    
                    
                    </div>
                    
                    
                    

                </li>)
            }
        </>
    );

}

export default Cart;