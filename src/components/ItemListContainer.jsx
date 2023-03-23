import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { Heading, Center } from "@chakra-ui/react";
import { collection, getDocs, getFirestore } from "firebase/firestore";



const ItemListContainer = () => {
  
  const { category } = useParams();
  const [products, setProducts] = useState([]);

   useEffect(() => {
    const db = getFirestore();
    const productCollection = collection(db, "items");
    getDocs(productCollection).then((querySnapshot) => {
      const products = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
    setProducts(products);
    })
  }, []);
   



  const catFilter = products.filter((product) => product.category === category);
  return (
    <div>
      <Center bg="#81A4CD" h="100px" color="black">
        <Heading as="h2" size="2xl">
          Productos.
        </Heading>
      </Center>
      {category ? <ItemList products={catFilter} /> : <ItemList products={products} />}
    </div>
   );
   };

export default ItemListContainer;