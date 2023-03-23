import { Link } from "react-router-dom";
import {Center, Card, CardBody, CardHeader, Image, Heading, Text, Divider, Stack, CardFooter, Button, Box,} from "@chakra-ui/react";

const Item = ({ id, stock, name, image, category }) => {
  return (
    <div>
      <div key={id}>
        <Center p="3rem">
          <Card maxW="sm">
            <CardBody>
              <Image src={image} alt={name} borderRadius="md" />
              <Stack mt="7" spacing="3">
                <Heading size="md">{name}</Heading>
                <Text color={"blackAlpha.800"}>Categoria: {category}</Text>
                <Text color="green.300" fontSize={"xl"}>
                  Stock: {stock}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <Center>
              <CardFooter>
                <Button variant="solid" colorScheme="twitter" size={"md"}>
                  <Link to={`/item/${id}`}>Ver detalles</Link>
                </Button>
              </CardFooter>
            </Center>
          </Card>
        </Center>
      </div>
    </div>
  );
};

export default Item;
