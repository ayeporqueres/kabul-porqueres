import { useContext } from "react";
import { CartContext } from "../cartContext/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";
import { doc, getFirestore, updateDoc } from "firebase/firestore";

const Cart = () => {
    const { cartList, clear, removeItem, totalCart } = useContext(CartContext);

    const terminarCompra =() => {

        let usuario = {
            comprador: {
                nonbre: 'some user',
                telefono: '32132-133213-2132',
                email: 'example@email.com'
            },
            items: cartList.map(item => {
                return (
                    {
                        id: item.id,
                        titulo: item.titulo,
                        precio: item.precio,
                        quantity: item.quantity
                    }
                );
            }),
            date: new Date(),
            total: totalCart()
        }
        generarPedido(usuario);
        actualizarStock();
    }

    const generarPedido =(datosCompraTerminada)=> {
        const db = getFirestore();
        const itemCollection = db.collection("orders");
        itemCollection.add(datosCompraTerminada)
            .then(res => {
                alert('Se generó un pedido con el id: ' + res.id)
                clear();
            })
            .catch(err => console.log(err))
    }

    const actualizarStock =()=>{

        const db = getFirestore();
        const itemCollection = db.collection("items");
        itemCollection.get()
            .then(res => {
                res.forEach(item => {
                    cartList.forEach(el => {
                        if (item.data().id === el.id) {
                            const consulta = doc(db, "items", item.id);
                            updateDoc(consulta, { stock: el.stock - el.quantity });
                        }
                    });
                });
                })
            .catch(error => console.log(error))


        return (

            <>
                {cartList.length > 0 ?
                    <div>
                        <h1 className="titulocarrito"> TU CARRITO </h1>
                        <button onClick={() => clear()}> VACIAR EL CARRITO</button>
                        <br></br>
                    </div> :
                    <div className="carritovacio">
                        <h2 className="carritovacio2"> TENES EL CARRITO VACIO</h2>
                        <Link to='/' className="volveralatienda"> VOLVER A LA TIENDA</Link>
                    </div>
                }




                <section>
                    {cartList.map((item, i) =>

                        <section key={i}>

                            <div className='contenedor1'>
                                <img src={item.imagen} className="fotocarrito" alt="" />

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
                        <button onClick={terminarCompra}>TERMINAR LA COMPRA</button>
                    </div>
                }
            </>
        );

    }
    }
        export default Cart;