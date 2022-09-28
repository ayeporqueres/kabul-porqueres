import "../../style/cartWidget.css";
import Badge from 'react-bootstrap/Badge';
import {FaShoppingCart} from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../cartContext/CartContext";


const CartWidget = () => {
    const {cartWidget} = useContext (CartContext)
    return(
            <div className="posicion">
            <FaShoppingCart className="carrito"/>
            <Badge bg="danger" className="notificacion">{cartWidget()}</Badge>
            </div>
            
        
    );
}

export default CartWidget;