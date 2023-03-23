
import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import {Flex, Box, Spacer, Heading, Container, Menu, MenuButton, MenuList, MenuItem, Button, Text, Divider,} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
const NavBar = () => {
  return (
    <>
      <Container maxW="150rem" bg="#3E7CB1" color="blackAlpha.900">
        <Flex alignItems="center" gap="2">
          
          <Box p="10" w="300px" h="100">
            <Heading size="2xl"> <Link to={"/"}> Lightweight</Link> </Heading>
          </Box>
          <Spacer />
          <Box>
            <Menu>
              <Link to={"/catalogue"}>
                <MenuButton as={Button} size="lg" variant="solid" colorScheme="twitter" m="5" > Catalogo </MenuButton>
              </Link>
            </Menu>
            <Menu>
              <MenuButton as={Button} size="lg" variant="solid" colorScheme="twitter" rightIcon={<ChevronDownIcon />} m="5" >
                Categorias
              </MenuButton>
              <MenuList className="menu-list"> <Link to={`/category/${"Proteina"}`}> <MenuItem>Proteina</MenuItem></Link>
                <Link to={`/category/${"Creatina"}`}><MenuItem>Creatina</MenuItem></Link>
                <Link to={`/category/${"Otros"}`}><MenuItem>Otros</MenuItem></Link>
              </MenuList>
            </Menu>
          </Box>
          <Spacer />
          <Box p="10" w="300px" h="100">
            <Link to={"/cart"}> <CartWidget />  </Link>
          </Box>
        </Flex>
        <Divider></Divider>
      </Container>
    </>
  );
};

export default NavBar;