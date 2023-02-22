import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import products from "../data.json";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
   const { id } = useParams();

   const [product, setProduct] = useState({});

   useEffect(() => {
    let productSelected = products.find((prod) => prod.id === +id);

    setProduct(productSelected);
   }, []);

   

  return ( <div><ItemDetail data={product} /></div> 
  )
}

export default ItemDetailContainer;