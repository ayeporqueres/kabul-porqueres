
import ItemList from '../itemList/ItemList';
import { useState, useEffect } from "react";
import customFetch from "../../utils/CustomFetch";
import productos from "../../utils/productos";
import "./itemListContainer.css";
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const {categoryId} = useParams();

    // const onAdd = (valor) => {
    //     alert("Usted ha seleccionado " + valor + " productos")
    // }

    useEffect(() => {
        if (categoryId){
            customFetch(2000, productos.filter(item => item.category == categoryId))
             .then(result => setDatos(result))
             .catch(err => console.log(err))

        }else{
            customFetch(2000, productos)
             .then(result => setDatos(result))
             .catch(err => console.log(err))
        }
        
    }, [categoryId]);

    return (
        <main>

            

            
            
            <ItemList items={datos} />



        </main>
    );
}
export default ItemListContainer;



