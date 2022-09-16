import Nabvar from './components/navBar/NavBar.js';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';





const App = () => {
  return (


    <BrowserRouter>
      <Nabvar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/item/:idItem' element={<ItemDetailContainer />} />
        
      </Routes>

    </BrowserRouter>



  );

}

export default App;
