import React from "react";
import { Center, Card, CardBody, Image, Stack, Heading, Text, CardFooter, Divider, Box,} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    const db = getFirestore();
    const productDoc = doc(db, "items", `${id}`);

    getDoc(productDoc).then((snapshot) => {
      if (snapshot.exists()) {
        setProduct(snapshot.data());
      } else {
        console.log("Error");
      }
    });
  }, []);

  return (
    <div key={product.id}>
      <Center p="1rem">
        <Card className="card-main" align={"center"}>
          <CardBody>
            <Center>
              <Box boxSize={"sm"}>
                <Image borderRadius="sm" src={`../src/assets/${product.image}.png`}/>
              </Box>
            </Center>
            <br />
            <br />
            <br />
            <br />
            <Stack mt="8" spacing="5">
              <Heading size="lg">{product.name}</Heading>
              <Text color="blackAlpha.800" fontSize="lg" as="ins"> Descripcion: {product.description} </Text>
              <Text color="blackAlpha.800" fontSize="lg" as="sub"> Categoria: {product.category} </Text>
              <Text color="green.400" fontSize="xl" as="i"> Stock: {product.stock} </Text>
              <Text color="blackAlpha.900" fontSize="2xl" as="b"> Precio: UYU {product.price} </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter className="card-footer">
            <ItemCount stock={product.stock} id={product.id}  price={product.price} name={product.name} image={product.image}/>
          </CardFooter>
        </Card>
      </Center>
    </div>
  );
};

export default ItemDetail;
