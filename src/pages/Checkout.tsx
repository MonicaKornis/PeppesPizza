import styled from 'styled-components';
import CustomerDataForm from '../components/CustomerDataForm/CustomerDataForm';
import  OrderSummary  from '.././components/OrderSummary/OrderSummary';
import { useCart } from './../context/cart/cart-context';
import { formatDataForOrder } from './../utils';
import { useState } from 'react';
import { CustomerFormData, CustomerFormErrors } from '../types';

const CheckoutContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const Checkout = () => {
    const { cart } = useCart();

    const [formData, setFormData] = useState<CustomerFormData>({
        deliveryType: 'Pickup',
        email: '',
        firstName: '',
        lastName: '',
        addressLine1:'',
        city: '',
        state: '',
        zipCode: '',
        paymentType: "Cash",
        creditCardNumber: '',
        expiryDate: undefined,
        formInvalid: true,
        cvv: ''
      });

      const [formErrors] = useState<CustomerFormErrors>({
        deliveryType: '',
        email: '',
        firstName: '',
        lastName: '',
        addressLine1:'',
        city: '',
        state: '',
        zipCode: '',
        paymentType: '',
        creditCardNumber: '',
        expiryDate: '',
        cvv: ''
      });


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(cart, 'cart')
        const data = formatDataForOrder(formData, cart.items, cart.totalCost)
        // api call
        console.log(data)
    }
  

    if(cart.items.length === 0) return (<h1>Your cart is empty!</h1>)
    return (
        <CheckoutContainer>
        <CustomerDataForm handleSubmit={handleSubmit} formErrors={formErrors} formData={formData} setFormData={setFormData}/>
        <OrderSummary pizzas={cart.items} totalCost={cart.totalCost}/>
        </CheckoutContainer>

    )
};

export default Checkout;