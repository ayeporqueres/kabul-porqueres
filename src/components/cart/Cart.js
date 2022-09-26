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
            <section>
                {contexto.cartList.map(item =>

                    <section>
                        <div className='contenedor1'>
                            <img src={item.imagen}  className="fotocarrito" alt="" />
                             
                            <div className="contenedor2" >{item.titulo}</div>
                            <div className="contenedor2" >Cantidad: {item.quantity}</div>
                            <div className="contenedor2">Precio ${item.precio} </div>
                            <div className="contenedor2" ><button onClick={() => contexto.removeItem(item.id)}>❌</button> </div>


                        </div>
                    </section>



                )
                }
            </section>
        </>
    );

}

export default Cart;