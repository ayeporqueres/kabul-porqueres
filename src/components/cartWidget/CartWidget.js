import "../../style/cartWidget.css";
import Badge from 'react-bootstrap/Badge';
import {FaShoppingCart} from "react-icons/fa";


const CartWidget = () => {
    return(
            <div className="posicion">
            <FaShoppingCart className="carrito"/>
            <Badge bg="danger" className="notificacion">9</Badge>
            </div>
            
        
    );
}

export default CartWidget;