import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";


const ItemDetailContainer = () => {
     const [data, setData] = useState({});

     useEffect(() => {
      const db = getFirestore();
      const productCollection = collection(db, "items");
      getDocs(productCollection).then((querySnapshot) => {
        const products = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
      setData(products);
      })
    }, []);
     

   

  return ( <div><ItemDetail product={data} /></div> 
  )
}

export default ItemDetailContainer;