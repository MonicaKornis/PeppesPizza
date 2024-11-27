import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
    font-size: 1.2rem;
    transition: color 0.3s ease;

    &:hover {
      color: #f0a500;
    }
`;

const NavBar = () => {
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
      <NavItem>
        <Link to="/orderstatus">View Order Status</Link>
      </NavItem>
    </Navbar>
  );
};

export default NavBar;
