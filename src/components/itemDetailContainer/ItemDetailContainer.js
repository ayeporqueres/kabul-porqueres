import { useEffect, useState } from "react";
import customFetch from "../../utils/CustomFetch";
import ItemDetail from "../itemDetail/ItemDetail";
import productos from "../../utils/productos";

const ItemDetailContainer = () =>{
    const [ dato, setDato] = useState ({});
    const [ flag, setFlag] = useState (false);

    useEffect(()=> {
        customFetch (2000, productos[9])

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