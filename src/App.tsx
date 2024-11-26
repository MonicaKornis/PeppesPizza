import { Routes, Route, Link } from "react-router-dom"
import './App.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart.tsx';
import Checkout from './pages/Checkout';
import CartProvider from "./context/cart/CartProvider";

const App = () => (
  <div className="App">
    <CartProvider>
    <nav>
        <div><Link to="/">Home</Link></div>
        <div><Link to="/menu">Menu</Link></div>
        <div><Link to="/cart">Cart</Link></div>
    </nav>
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/menu" element={ <Menu/> } />
      <Route path="/cart" element={ <Cart/> } />
      <Route path="/checkout" element={ <Checkout/> } />
    </Routes>
    </CartProvider>
</div>
);

export default App;
