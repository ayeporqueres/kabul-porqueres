import ItemList from '../itemList/ItemList';
import { useState, useEffect } from "react";
import "./itemListContainer.css";
import { useParams } from 'react-router-dom';
import { db } from '../../utils/firebaseConfig'
import { collection, getDocs } from "firebase/firestore";


const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { categoryId } = useParams();



    useEffect( () => {
        async function fetchData(){
        const querySnapshot = await getDocs(collection(db, "productos"));
        const dataFromFirestore = querySnapshot.docs.map(item => ({
            id: item.id,
            ...item.data()
        }))
        
        setDatos(dataFromFirestore)
    }
  fetchData();
},[categoryId]);

    return (
        <main> 
            <ItemList items={datos} />
           
        </main>
    );
}
export default ItemListContainer;



