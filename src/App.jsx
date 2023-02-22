import React from 'react';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import Cart from './components/Cart';
import './App.css';
import { Route, Routes, useParams, BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/catalogue" element={<ItemListContainer />} />
          <Route
            exact
            path="/category/:category"
            element={<ItemListContainer />}
          />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
