import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from './../../context/AuthContext';

// Styled Components
const Navbar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ccc; 
`;

const NavItem = styled.div`
    text-decoration: none;
    font-family: "Zilla Slab";
    font-size: 1rem;
    transition: color 0.3s ease;

    &:hover {
      color: #f0a500;
    }
`;

const NavBar = () => {
  const { authToken, currentUser }  = useAuth() || {};
  return (
    <Navbar>
      <NavItem>
        <Link to="/">Home</Link>
      </NavItem>
      <NavItem>
        <Link to="/menu">Menu</Link>
      </NavItem>
      <NavItem>
        <Link to="/cart">Cart</Link>
      </NavItem>
      {currentUser?.role === 'admin' ? <NavItem>
        <Link to="/order-dashboard">View All Orders</Link>
      </NavItem> : null}
      <NavItem>
        <Link to="/order-status">Check Orders Status</Link>
      </NavItem>
      <NavItem>
        <Link to="/login">{authToken ? `Logout` : `Login`}</Link>
      </NavItem>
    </Navbar>
  );
};

export default NavBar;
