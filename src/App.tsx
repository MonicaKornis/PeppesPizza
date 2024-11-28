import { Routes, Route } from "react-router-dom"
import './App.css';
import Home  from './pages/Home.tsx';
import Menu from './pages/Menu.tsx';
import Cart from './pages/Cart.tsx';
import Checkout from './pages/Checkout.tsx';
import AllOrders from './pages/AllOrders.tsx'
import CartProvider from "./context/cart/CartProvider";
import NavBar from "./components/NavBar/Navbar.tsx";


const App = () => (
  <div className="App">
    <CartProvider>
    <NavBar/>
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/menu" element={ <Menu/> } />
      <Route path="/cart" element={ <Cart/> } />
      <Route path="/checkout" element={ <Checkout/> } />
      <Route path="/orderstatus" element={ <AllOrders/> } />
    </Routes>
    </CartProvider>
</div>
);

export default App;
