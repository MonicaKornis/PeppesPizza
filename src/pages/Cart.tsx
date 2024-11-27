
import styled from 'styled-components';
import AddToCartButton from './../components/AddToCartButton/AddToCardButton.tsx';
import { useCart } from './../context/cart/cart-context';
import { useNavigate } from 'react-router-dom';
import { PizzaTopping, FormPizza } from '../types/index.ts';


// Styled Components
const CartContainer = styled.div`
  max-width: 32rem;
  margin: 0 auto;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
`;

const CartHeader = styled.div`
  margin-bottom: 1.5rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1a202c;
`;

const Subtitle = styled.p`
  color: #4a5568;
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PizzaCard = styled.div`
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 1rem;
  background: #f8fafc;
`;

const PizzaHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const PizzaInfo = styled.div`
  flex-grow: 1;
`;

const PizzaName = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1a202c;
`;

const Toppings = styled.p`
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: #4a5568;
  display: flex
  flex-wrap: wrap;
  margin-right: 0.73em;
`;

const PriceInfo = styled.div`
  text-align: right;
`;

const TotalPrice = styled.p`
  font-weight: 600;
  color: #1a202c;
`;

const UnitPrice = styled.p`
  font-size: 0.875rem;
  color: #4a5568;
`;

const Controls = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartFooter = styled.div`
  margin-top: 1.5rem;
  border-top: 1px solid #e2e8f0;
  padding-top: 1rem;
`;

const TotalSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TotalLabel = styled.span`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1a202c;
`;

const TotalAmount = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1a202c;
`;

const CheckoutButton = styled.button`
  width: 100%;
  margin-top: 1rem;
  padding: 0.75rem 1rem;
  background: #3182ce;
  color: white;
  font-weight: 600;
  border-radius: 0.5rem;
  transition: background 0.2s;

  &:hover {
    background: #2c5282;
  }
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: 2rem 0;
  color: #4a5568;
`;


const Cart = () => {
  const { cart } = useCart();
  const items = cart.items;
  const navigate = useNavigate();

  return (
    <CartContainer>
      <CartHeader>
        <Title>Your Pizza Cart</Title>
        <Subtitle>{items.length} items in cart</Subtitle>
      </CartHeader>

      <ItemsContainer>
        {items.map((pizza: FormPizza, index: number) => (
          <PizzaCard key={index}>
            <PizzaHeader>
              <PizzaInfo>
                <PizzaName>
                  {pizza.type} Pizza
                </PizzaName>
                <Toppings>Size {pizza.size}</Toppings>
                {pizza.toppings && pizza.toppings.length > 0 && (
                  <Toppings>
                    Extra Toppings: {pizza.toppings.map((t: PizzaTopping) => t.name).join(', ')}
                  </Toppings>
                )}
                   {pizza.toppingExclusions && pizza.toppingExclusions.length > 0 && (
                  <Toppings>
                    Excluded Toppings: {pizza.toppingExclusions.map((t: string) => t).join(', ')}
                  </Toppings>
                )}
              </PizzaInfo>
              <PriceInfo>
                <TotalPrice>
                  ${(pizza.totalPrice * pizza.quantity).toFixed(2)}
                </TotalPrice>
                <UnitPrice>${pizza.totalPrice.toFixed(2)} each</UnitPrice>
              </PriceInfo>
            </PizzaHeader>

            <Controls>
                <AddToCartButton buttonType='cart' orderData={pizza} ammountInCart={pizza.quantity}/>
            </Controls>
          </PizzaCard>
        ))}
      </ItemsContainer>

      {items.length > 0 ? (
        <CartFooter>
          <TotalSection>
            <TotalLabel>Total</TotalLabel>
            <TotalAmount>${cart.totalCost.toFixed(2)}</TotalAmount>
          </TotalSection>
          <CheckoutButton onClick={() =>navigate("/checkout")}>Proceed to Checkout</CheckoutButton>
        </CartFooter>
      ) : (
        <EmptyCart>Your cart is empty</EmptyCart>
      )}
    </CartContainer>
  );
};


export default Cart;