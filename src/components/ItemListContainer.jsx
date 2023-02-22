import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Data from "../data.json";
import { useParams } from "react-router-dom";
import { Heading, Center } from "@chakra-ui/react";

const ItemListContainer = () => {
  const { category } = useParams();
   console.log(category);

   const [products, setproducts] = useState([]);

   useEffect(() => {
    setproducts(Data);
  }, []);


  const catFilter = products.filter((product) => product.category === category);
  return (
    <div>
      <Center bg="#A0AEC0" h="100px" color="black">
        <Heading as="h2" size="2xl">
          Productos.
        </Heading>
      </Center>
      {category ? <ItemList products={catFilter} /> : <ItemList products={Data} />}
    </div>
  );
};

export default ItemListContainer;