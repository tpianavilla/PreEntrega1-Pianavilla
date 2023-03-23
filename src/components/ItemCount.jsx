import { Button, ButtonGroup, Flex, Text, Spacer } from "@chakra-ui/react";
import { useState, useContext } from 'react';
import { CartContext } from "../context/ShoppingCartContext";

function ItemCount({ id, price, name, image }) {
  const [cart, setCart] = useContext(CartContext);
  const [count, setCount] = useState(1);

  function addItem() {
    setCount(count + 1);
  }

  function substractItem() {
    setCount(count - 1);
  }

  function addToCart() {
    setCart(currProducts => {
      const isProductFound = currProducts.find(product => product.id === id);
      if (isProductFound) {
        return currProducts.map(product => {
          if (product.id === id) {
            return { ...product, quantity: product.quantity + count };
          } else { return product;
          }
        });
      } else {
        return [...currProducts, { id, quantity: count, price, name, image, }];
      }
    });
  }

  return (
    <div>
      <Flex align="center" padding={2} gap='5'>
        
        <ButtonGroup size="lg" isAttached variant="solid" spacing={3} gap={3}>
        
          <Button onClick={substractItem} isDisabled={count < 1} colorScheme='orange'>-1</Button>
          <Text fontSize={"2xl"}>{count}</Text>           
          <Button onClick={addItem} isDisabled={count >= 10} colorScheme='orange'>+1</Button>
          <Button onClick={addToCart} colorScheme='twitter' >Add to Cart</Button>
        </ButtonGroup>
      </Flex>

    </div>

  );
}

export default ItemCount;
