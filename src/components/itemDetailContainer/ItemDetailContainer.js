import { useEffect, useState } from "react";
import customFetch from "../../utils/CustomFetch";
import ItemDetail from "../itemDetail/ItemDetail";
import productos from "../../utils/productos";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () =>{
    const [ dato, setDato] = useState ({});
    const [ flag, setFlag] = useState (false);
    const {idItem} = useParams()
   console.log(typeof idItem)
    useEffect(()=> {
        customFetch (2000, productos.find(item => item.id === parseInt(idItem)))

          .then (result =>{
            setDato (result)
            setFlag (true)
        })
          .catch (err => console.log(err))

    },[]);
   
    return(
       <ItemDetail item = {dato} flag={flag} />

    )

}

export default ItemDetailContainer;