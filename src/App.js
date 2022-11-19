import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailCointainer';
import Cart from './components/Cart';
import Form from './components/Form';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './context/CartContext';

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
          <Header/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="Bienvenidos gamers" carrousel={true}/>}/>
            <Route path='/category/:categoryName' element={<ItemListContainer/>}/>
            <Route path='/detail/:idProd' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/checkout' element={<Form />}/>
          </Routes>
          <Footer/>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
