import React, { useContext } from 'react';
import { Button } from "@chakra-ui/react";
import { CartContext } from '../context/ShoppingCartContext';

function CartWidget() {
  const [cart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  return (
    <div className="cart">
      <Button size="lg" variant="outline" colorScheme="orange">
        <span className="material-symbols-outlined">shopping_cart</span>
        <span>{quantity}</span>
      </Button>
    </div>
  );
}

export default CartWidget;
