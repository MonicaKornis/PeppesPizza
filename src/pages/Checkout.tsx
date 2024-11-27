import styled from 'styled-components';
import CustomerDataForm from '../components/CustomerDataForm/CustomerDataForm';
import  OrderSummary  from '.././components/OrderSummary/OrderSummary';
import { useCart } from './../context/cart/cart-context';
import { formatDataForOrder } from './../utils';
import { useState } from 'react';
import { CustomerFormData, CustomerFormErrors, HiringFrontendTakeHomeOrderType, HiringFrontendTakeHomePaymentMethod } from '../types';
import { createPizzaOrder } from './../api/service';

const CheckoutContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const Checkout = () => {
    const { cart } = useCart();
    const [isLoading, setIsLoading] = useState(false);
    const [dataRes, setData] = useState<OrderResponse | null>(null);
    const [error, setError] = useState<string | null>(null);

    const [formData, setFormData] = useState<CustomerFormData>({
        deliveryType: HiringFrontendTakeHomeOrderType.Pickup,
        email: '',
        firstName: '',
        lastName: '',
        addressLine1:'',
        city: '',
        state: '',
        zipCode: '',
        paymentType: HiringFrontendTakeHomePaymentMethod.Cash,
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


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(cart, 'cart')
        const data = formatDataForOrder(formData, cart.items, cart.totalCost)
        // api call
        console.log(data)

        try {
            const response = await createPizzaOrder(data);
            setData(response);
          } catch (err) {
            setError(err instanceof Error ? err.message : 'Order submission failed');
          } finally {
            setIsLoading(false);
          }
    }
  
    console.log(dataRes)

    if(cart.items.length === 0) return (<h1>Your cart is empty!</h1>)
    return (
        <CheckoutContainer>
        <CustomerDataForm handleSubmit={handleSubmit} formErrors={formErrors} formData={formData} setFormData={setFormData}/>
        <OrderSummary pizzas={cart.items} totalCost={cart.totalCost}/>
        </CheckoutContainer>

    )
};

export default Checkout;