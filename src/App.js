import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailCointainer';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Main/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Bienvenidos gamers"/>}/>
        <Route path='/category/:categoryName' element={<ItemListContainer/>}/>
        <Route path='/detail/:idProduct' element={<ItemDetailContainer />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
