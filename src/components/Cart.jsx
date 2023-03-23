import React from "react";
import { useState, useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import {
  Button,
  Container,
  Center,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Box,
  Image,
  Flex,
  Stack,
} from "@chakra-ui/react";
import Swal from "sweetalert2";
import CheckoutForm from "./CheckoutForm";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const [orderID, setOrderID] = useState(null);

  const handleDelete = (id) => {
    setCart((prevCart) => {
      const newCart = prevCart.filter((prod) => prod.id !== id);
      return newCart;
    });
  };

  const getTotalPrice = () => {
    const gasto = cart.reduce((acc, prod) => {
      return acc + prod.quantity * prod.price;
    }, 0);

    return gasto;
  };
  const clearCart = () => {
    setCart([]);
  };

  const getParcialPrice = (prod) => {
    const parcial = prod.quantity * prod.price;
    return parcial;
  };

  const clearCartAlert = () => {
    Swal.fire({
      title: "Quieres vaciar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si, Vaciar",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("El carrito se ha vaciado correctamente", "", "success");
        clearCart();
      } else if (result.isDenied) {
        Swal.fire("El carrito no ha sido vaciado.", "", "info");
      }
    });
  };

  if (orderID) {
    Swal.fire({
      title: "Muchas gracias por tu compra!",
      text: "El ID de tu compra es " + orderID,
      icon: "success",
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Continuar",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        setOrderID(null);
      }
    });
  }

  const total = getTotalPrice();

  return (
    <>
      <Center bg="#81A4CD" h="100px" color="black">
        <Heading as="h2" size="2xl">
          Mi Carrito
        </Heading>
      </Center>

      {cart.map((prod) => {
        return (
          <Container
            key={prod.id}
            maxW="container.sm"
            className="main-catalogue"
            centerContent
            padding={2}
          >
            <Card maxW="md" padding={2}>
              <CardHeader>
                <Heading size="md">{prod.name}</Heading>
              </CardHeader>
              <CardBody>
                <Stack spacing={3}>
                  <Box boxSize={"sm"}>
                    <Image
                      borderRadius="sm"
                      src={`../src/assets/${prod.image}.png`}
                    />
                  </Box>
                  <Text as="b" fontSize="md">
                    Cantidad: {prod.quantity}
                  </Text>
                  <Text fontSize={"lg"}> UYU ${prod.price}</Text>
                  <Text as={("b", "u")} fontSize="xl" color={"green.500"}>
                    Subtotal: ${getParcialPrice(prod)}{" "}
                  </Text>
                </Stack>
              </CardBody>
              <Center>
                <CardFooter>
                  <Button colorScheme="red" onClick={() => handleDelete(prod.id)}> Quitar del carrito </Button>
                </CardFooter>
              </Center>
            </Card>
          </Container>
        );
      })}
      <Container>
        {" "}<Text fontSize="35px" as={("b", "i")} color="orange.400"> Importe total: UYU ${total}</Text>{" "}
        <br />
        <CheckoutForm
          cart={cart}
          total={total}
          clearCart={clearCart}
          setOrderID={setOrderID}
        />
        <Button size={"sm"} onClick={clearCartAlert} colorScheme="twitter">
          Eliminar carrito
        </Button>{" "}
      </Container>
    </>
  );
};

export default Cart;
