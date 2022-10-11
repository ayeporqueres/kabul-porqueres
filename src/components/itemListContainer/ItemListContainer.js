import ItemList from '../itemList/ItemList';
import { useState, useEffect } from "react";
import "./itemListContainer.css";
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../utils/firebaseConfig'


const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { categoryId } = useParams();



    useEffect( () => {
        
        const db = getFirestore();
        const itemCollection = db.collection("productos");
        if (categoryId) {
         
            const item = itemCollection.where('category', '==', categoryId);
            item.get()
                .then(response => {
                    if (response.docs.length === 0) {
                        console.log('Archivo no encontrado.');
                        return;
                    }
                    setDatos(response.docs);
                   
                })
                .catch(error => console.log(error))
        } else {
            itemCollection.get()
                .then(response => {
                    if (response.size === 0) {
                        console.log('Archivo no encontrado.');
                        return;
                    }
                    setDatos(response.docs);
                   console.log (response.docs)
                })
                .catch(error => console.log(error))
        }
},[categoryId]);

    return (
        <main> 
            <ItemList items={datos} />
           
        </main>
    );
}
export default ItemListContainer;



