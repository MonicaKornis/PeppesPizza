import { useState, useEffect } from 'react';
 // @ts-ignore
import Spinner  from "./../assets/spinner.svg?react";
import PizzaOrderForm2 from '../components/PizzaOrderForm/PizzaOrderForm2';
import { fetchMenuData } from './../api/service';
import styled from 'styled-components';

const PageContainer = styled.div`
  margin: 250px;
`;

const Menu = () =>  {

  const [fetchedData, setFetchedData] = useState({pizzas: {}, toppings: {}});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      // const urls = ['https://api.sparrowtest.com/v2/lmd/hiring/frontend/take-home/specialty-pizzas', 'https://api.sparrowtest.com/v2/lmd/hiring/frontend/take-home/pizza-pricing'];
      try {
        const data = await fetchMenuData();
        const pizzaTypes = data[0].specialtyPizzas;
        const pizzaData = {}
        pizzaData['custom'] = {
          description: "Choose your own toppings for a pizza customized to you!", 
          price: data[1].size,
          toppings: []
        } 
        pizzaTypes.forEach((pizza) => {
           pizzaData[pizza.name] = pizza;
         }) // formatting pizza data


        setFetchedData({
          pizzas: pizzaData, 
          toppings: data[1].toppingPrices
        });
        setIsLoading(false);
      } catch (err) {
        console.log(err)
        const errMessage = typeof err == 'string' ? err : JSON.stringify(err)
        setError(errMessage);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); 

  console.log(fetchedData)

  if(isLoading) return <PageContainer><Spinner /></PageContainer>;
  if (error) return <div>Error: {error}</div>;

   return (
    <>
    {/* <h1>Menu Page</h1> */}
    <PizzaOrderForm2 toppings={fetchedData.toppings} pizzaData={fetchedData.pizzas}/>
    </>
   )
};

export default Menu;