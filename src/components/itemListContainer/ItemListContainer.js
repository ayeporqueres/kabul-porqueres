import ItemCount from '../itemCount/ItemCount';
import ItemList from '../itemList/ItemList';
import { useState, useEffect } from "react";
import customFetch from "../../utils/CustomFetch";
import productos from "../../utils/productos";

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

            <div>
                <h1 style={{ color: "green" }}> ¡Bienvenido a Kabul! </h1> 
            </div>

            <ItemCount stock={5} inicial={1} onAdd={onAdd} />
            <h1>BUZOS</h1>
            <ItemList items={datos} />



        </main>
    );
}
export default ItemListContainer;



