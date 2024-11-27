import React from 'react';
import styled from 'styled-components';
import { FormPizza } from './../../types/index';
import { transformToTitleCase } from './../../utils'

const OrderSummaryContainer = styled.div`
    font-family: Arial, sans-serif;
    max-width: 500px;
    margin: 29px;
    padding: 17px 67px 20px 67px;
    background-color: #f9f9f9;
    border-radius: 8px;
    max-height: 70vh;
    overflow-y: scroll;
    width: 27%;
`;

const PizzaItem = styled.div`
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 15px;
  margin-bottom: 10px;
`;

const PizzaDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const TotalSection = styled.div`
  border-top: 2px solid #e0e0e0;
  padding-top: 15px;
  font-weight: bold;
  text-align: right;
`;

const OrderSummary: React.FC<{ pizzas: FormPizza[], totalCost: number }> = ({ pizzas, totalCost }) => {
  // Calculate total order amount

  return (
    <OrderSummaryContainer>
      <h2>Order Summary</h2>
      {pizzas.map((pizza, index) => (
        <PizzaItem key={pizza.id || index}>
          <PizzaDetails>
            <div>
              {pizza.quantity}{` x ${pizza.size} ${transformToTitleCase(pizza.type)} `}Pizza
            </div>
            <div>${pizza.totalPrice.toFixed(2)}</div>
          </PizzaDetails>
          {pizza.toppings && pizza.toppings.length > 0 && (
            <div>
              Toppings: {pizza.toppings.map(item => transformToTitleCase(item.name)).join(', ')}
            </div>
          )}
          {pizza.toppingExclusions && pizza.toppingExclusions.length > 0 && (
            <div>
              Exclude: {pizza.toppingExclusions.map(item => transformToTitleCase(item)).join(', ')}
            </div>
          )}
        </PizzaItem>
      ))}
      <TotalSection>
        Total Order: ${totalCost.toFixed(2)}
      </TotalSection>
    </OrderSummaryContainer>
  );
};

export default OrderSummary;