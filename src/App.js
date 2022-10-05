import Nabvar from './components/navBar/NavBar.js';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Cart from './components/cart/Cart.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartContextProvider from './components/cartContext/CartContext.js';





const App = () => {
  return (

    <CartContextProvider>
      <BrowserRouter>
        <Nabvar />

        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />

        </Routes>

      </BrowserRouter>
    </CartContextProvider>



  );

}

export default App;
