import { serverTimestamp, addDoc, collection, updateDoc, doc, getFirestore } from "firebase/firestore";
import {
    Container,
    Heading,
    Stack,
    Input,
    Button,
    Text,
    Center,
    FormControl,
    FormLabel, Flex
  } from "@chakra-ui/react";
  import { useState } from "react";
  

  
  
  const CheckoutForm = ({cart, total, clearCart, setOrderID}) => {
    const [userData, setUserData] = useState({ email: "", nombre: "" });
    
    

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      buyer: userData,
      items: cart,
      total: total,
      date: serverTimestamp(),
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order)
        .then(res=> {
            setOrderID(res.id)
        })

        
    cart.map(product => {
        const orderDoc = doc(db, "products", product.id)
        updateDoc(orderDoc, {stock: product.stock - product.quantity})
    })






    clearCart();
  };

    return (
      <Flex padding={4} margin={4}>
        <Container>
        <FormControl>
          <form onSubmit={handleSubmit}>
            <FormLabel color={"whiteAlpha.900"} fontSize='lg'>Ingrese su nombre.</FormLabel>
            <Input size="lg" onChange={(e) => setUserData({ ...userData, email: e.target.value})} />
            <FormLabel color={"whiteAlpha.900"} fontSize='lg'>Ingrese su correo.</FormLabel>
            <Input size="lg" onChange={(e) => setUserData({ ...userData, nombre: e.target.value})} />
            <Button size={"lg"} colorScheme="twitter" type="submit" m={5}>
              Comprar!
            </Button>
          </form>
        </FormControl>
      </Container>
      </Flex>
    )
  }
  
  export default CheckoutForm