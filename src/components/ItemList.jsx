import Item from "./Item";
import { Container } from "@chakra-ui/react";
const ItemList = ({ products }) => {
  return (
    <>
      <Container maxW="container.sm" className="main-catalogue">
        {products?.map((product) => (
          <Item
          key={product.id}
          id={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          stock={product.stock}
          category={product.category}
          image={`../src/assets/${product.id}.png`} 
      />
        ))}
      </Container>
    </>
  );
};

export default ItemList;