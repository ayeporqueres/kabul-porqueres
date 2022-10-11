import { useEffect, useState } from "react";
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom";

import {getFirestore} from '../../utils/firebaseConfig'

const ItemDetailContainer = () => {
  const [dato, setDato] = useState({});
  const [flag, setFlag] = useState(false);
  const { idItem } = useParams()
  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("productos");
    itemCollection.get()
        .then(res => {
            res.forEach(item => {
                if (item.id === idItem) {
                    setDato(item.data());
                    setFlag(true);
                    
                }
            });
        })
        .catch(error => console.log(error))
  }, [idItem]);
  return (
      <ItemDetail item={dato} flag={flag} />
  )
}
export default ItemDetailContainer;