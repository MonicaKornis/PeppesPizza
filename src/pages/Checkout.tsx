import styled from 'styled-components';
import CustomerDataForm from '../components/CustomerDataForm/CustomerDataForm';
import  OrderSummary  from '.././components/OrderSummary/OrderSummary';
import { useCart } from './../context/cart/cart-context';

const CheckoutContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const Checkout = () => {
    const { cart } = useCart();

    if(cart.items.length === 0) return (<h1>Your cart is empty!</h1>)
    return (
        <CheckoutContainer>
        <CustomerDataForm/>
        <OrderSummary pizzas={cart.items} totalCost={cart.totalCost}/>
        </CheckoutContainer>

    )
};

export default Checkout;