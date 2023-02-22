
import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import {
  Flex,
  Box,
  Spacer,
  Heading,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Avatar,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
const NavBar = () => {
  return (
    <>
      <Container maxW="150rem" bg="gray.300" color="#262626">
        <Flex alignItems="center" gap="2">
          
          <Box p="10" w="300px" h="100">
            <Heading size="xl">
              <Link to={"/"}>Lightweight</Link>
            </Heading>
          </Box>
          <Spacer />
          <Box>
            <Menu>
              <Link to={"/catalogue"}>
                <MenuButton
                  as={Button}
                  size="lg"
                  variant="outline"
                  colorScheme="blue"
                  m="5"
                >
                  Catalogo
                </MenuButton>
              </Link>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                size="lg"
                variant="outline"
                colorScheme="blue"
                rightIcon={<ChevronDownIcon />}
                m="5"
              >
                Categorias
              </MenuButton>
              <MenuList className="menu-list">
                <Link to={`/category/${"Proteina"}`}>
                  <MenuItem>Proteina</MenuItem>
                </Link>
                <Link to={`/category/${"Creatina"}`}>
                  <MenuItem>Creatina</MenuItem>
                </Link>
                <Link to={`/category/${"Otros"}`}>
                  <MenuItem>Otros</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
          <Spacer />
          <Box p="10" w="300px" h="100">
            <Link to={"/cart"}>
              <CartWidget />
            </Link>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default NavBar;