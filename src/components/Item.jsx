import React from 'react'
import { Link } from 'react-router-dom'
import { Center, Card, CardBody, CardHeader, Image, Heading, Text, Divider, Stack, CardFooter, Button, Box } from "@chakra-ui/react";

const Item = ({ id, name, stock, category, image }) => {
    return (
        <div>
            <div key={id}>
                <Center p="1rem">
                    <Card maxW='sm'>
                        <CardBody>        
                            <Image
                                src={image}
                                alt={name}
                                borderRadius='lg'
                            />                           
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>{name}</Heading>
                                <Text color={'blue.600'}>
                                    Categoria: {category}
                                </Text>
                                <Text color='bl.600' fontSize='2xl'>
                                    Stock: {stock}
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <Button variant='outline' colorScheme='teal'>
                                <Link to={`/item/${id}`}>Detalles</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </Center>
            </div>
        </div>
    )
}

export default Item;
