import ItemCount from '../itemCount/ItemCount';
import ItemList from '../itemList/ItemList';
import { useState, useEffect } from "react";
import customFetch from "../../utils/CustomFetch";
import productos from "../../utils/productos";
import "./itemListContainer.css";

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);

    const onAdd = (valor) => {
        alert("Usted ha seleccionado " + valor + " productos")
    }

    useEffect(() => {
        customFetch(2000, productos)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, []);

    return (
        <main>

            

            <ItemCount stock={5} inicial={1} onAdd={onAdd} />
            <h2 className="buzos"> BUZOS</h2>
            <ItemList items={datos} />



        </main>
    );
}
export default ItemListContainer;



