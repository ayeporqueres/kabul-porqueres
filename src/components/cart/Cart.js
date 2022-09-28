import { useContext } from "react";
import { CartContext } from "../cartContext/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";


const Cart = () => {
    const {cartList,clear,removeItem, totalCart } = useContext(CartContext);
    
    return (

        <>
           {cartList.length > 0? 
           <div>
           <h1 className="titulocarrito"> TU CARRITO </h1>
           <button onClick={()=> clear()}> VACIAR EL CARRITO</button>
           <br></br>
           </div>:
           <div className="carritovacio">
            <h2 className="carritovacio2"> TENES EL CARRITO VACIO</h2>
            <Link to='/' className="volveralatienda"> VOLVER A LA TIENDA</Link>
           </div>
        }
            

            
            
            <section>
                {cartList.map(item =>

                    <section>
                        <div className='contenedor1'>
                            <img src={item.imagen}  className="fotocarrito" alt="" />
                             
                            <h2 className="tituloproducto" >{item.titulo}</h2>
                            <div className="contenedor2 precioproducto"> ${item.precio}</div>
                            <div className="contenedor2 cantidadproducto" >Cantidad: {item.quantity}</div>
                            <div className="contenedor2 totalproducto"> Total ${item.precio * item.quantity} </div>
                            <div className="contenedor2" ><button onClick={() => removeItem(item.id)}>❌</button> </div>


                        </div>
                    </section>
                   


                )
                }
            </section>
            {
             cartList.length > 0 &&
             <div className="ordendecompra1">
                <h2> ORDEN DE COMPRA </h2>
                <p> Subtotal  ${totalCart()}</p>
                <br></br>
                <p> TOTAL   $ {totalCart()}</p>
                <button>TERMINAR LA COMPRA</button>
             </div>
            }
        </>
    );

}

export default Cart;