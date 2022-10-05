import { useEffect, useState } from "react";
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../utils/firebaseConfig'

const ItemDetailContainer = () => {
  const [dato, setDato] = useState({});
  const [flag, setFlag] = useState(false);
  const { idItem } = useParams()
  useEffect(() => {
      async function fetchData() {
          try {
              const docRef = doc(db, "productos", idItem)
              const docSnap = await getDoc(docRef);
              console.log(docSnap.data())
              setDato(docSnap.data());
              setFlag(true);
          } catch (error) {
              console.log(error);
          }
      }
      fetchData();
      
  }, [idItem]);
  return (
      <ItemDetail item={dato} flag={flag} />
  )
}
export default ItemDetailContainer;