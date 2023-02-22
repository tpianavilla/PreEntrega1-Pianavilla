import React from 'react'
import { Center, Card, CardBody, Image, Stack, Heading, Text, CardFooter, Divider, Box} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";



const ItemDetail = ({data}) => {
 
  console.log(data, "<--- data");

  if (!data) {
    return <div>Loading...</div>;
  }

  

  

  return (
    <>
      
        <div key={data.id}>
          <Center p="1rem">
            <Card className="card-main" align={'center'}>
              <CardBody>
                <Center>
                <Box boxSize={'sm'}>
                <Image borderRadius="sm" src={`../src/assets/${data.id}.png`} />
                </Box>
                </Center>
                <br />
                <br />
                <br />
                <br />
                <Stack mt="8" spacing="5">
                  <Heading size="md">{data.name}</Heading>
                  <Text color="blue.800" fontSize="l">
                    Descripcion: {data.description}
                  </Text>
                  <Text color="blue.800" fontSize="l">
                    Categoria: {data.category}
                  </Text>
                  <Text color="red.600" fontSize="xl">
                    Stock: {data.stock}
                  </Text>
                  <Text color="green.600" fontSize="xl">
                    Precio: UYU {data.price}
                  </Text>
                </Stack>
                
              </CardBody>
              <Divider />
              
              <CardFooter className="card-footer">
                
                <ItemCount/>
                 
              </CardFooter>
            </Card>
          </Center>
        </div>
      
    </>
  )
}


export default ItemDetail;