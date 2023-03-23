import Item from "./Item";
import { Container } from "@chakra-ui/react";
const ItemList = ({ products }) => {
  return (
    <>
      <Container maxW="container.sm" className="main-catalogue">
        {products?.map((prod) => (
          <Item key={prod.id} id={prod.id} name={prod.name} description={prod.description} price={prod.price} stock={prod.stock} category={prod.category} image={`../src/assets/${prod.id}.png`}
          />
        ))}

      </Container>
    </>

  );

};

export default ItemList;