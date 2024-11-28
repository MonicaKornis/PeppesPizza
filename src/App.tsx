import { Routes, Route } from "react-router-dom"
import './App.css';
import Login from './pages/Login.tsx';
import Home  from './pages/Home.tsx';
import Menu from './pages/Menu.tsx';
import Cart from './pages/Cart.tsx';
import Checkout from './pages/Checkout.tsx';
import AllOrders from './pages/AllOrders.tsx';
import ViewOrder from './pages/ViewOrder.tsx'
import CartProvider from "./context/cart/CartProvider";
import AuthProvider from './context/AuthContext';
import NavBar from "./components/NavBar/Navbar.tsx";
import ProtectedAllOrdersRoute from './components/ProtectedRoute/ProtectedRoute.tsx';



const App = () => (
  <div className="App">
    <CartProvider>
    <AuthProvider>
      <NavBar/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/menu" element={ <Menu/> } />
        <Route path="/cart" element={ <Cart/> } />
        <Route path="/checkout" element={ <Checkout/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/order-dashboard" element={ <ProtectedAllOrdersRoute allowedRole='admin'>
          <AllOrders />
        </ProtectedAllOrdersRoute> } />
        <Route path="/order-status" element={ <ViewOrder/> } />
      </Routes>
    </AuthProvider>
    </CartProvider>
</div>
);

export default App;
