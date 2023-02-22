import { Button, ButtonGroup, Flex, Text } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { useState } from "react";

function ItemCount() {
  const [contador, setContador] = useState(0);
  const [stock, setStock] = useState(10);

  const sumar = () => {
    if (contador + 1 <= stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador - 1 >= 0) {
      setContador(contador - 1);
    }
  };

  const reset = () => {
    setContador(1);
  };

  return (
    <Flex align="center">
      <Text>{contador}</Text>
      <ButtonGroup size="sm" ml="2">
        <Button onClick={restar} leftIcon={<MinusIcon />} isDisabled={contador < 1}>
          -1
        </Button>
        <Button onClick={reset}>Reset</Button>
        <Button onClick={sumar} rightIcon={<AddIcon />} isDisabled={contador >= stock}>
          +1
        </Button>
        
      </ButtonGroup>
      <Button>Agregar al carrito</Button>
    </Flex>
  );
}

export default ItemCount;
