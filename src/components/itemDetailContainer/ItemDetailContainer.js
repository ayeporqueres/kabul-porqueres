import { useEffect, useState } from "react";
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../utils/firebaseConfig'

const ItemDetailContainer = () => {
  const [dato, setDato] = useState({});
  const { idItem } = useParams()



  useEffect(() => {
    async function fetchData() {
      const docRef = doc(db, "productos", idItem)
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return {
          id: idItem,
          ...docSnap.data()
        }
      } else {
        console.log('no such document!')
      }
      setDato(docRef)
    }
    fetchData();
  }, [idItem]);

  return (
    <ItemDetail item={dato} />

  )

}

export default ItemDetailContainer;