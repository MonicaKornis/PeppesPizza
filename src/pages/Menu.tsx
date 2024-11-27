import { useState, useEffect } from 'react';
import PizzaOrderForm2 from '../components/PizzaOrderForm/PizzaOrderForm2';


const Menu = () =>  {

  const [fetchedData, setFetchedData] = useState({pizzas: {}, toppings: {}});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const urls = ['https://api.sparrowtest.com/v2/lmd/hiring/frontend/take-home/specialty-pizzas', 'https://api.sparrowtest.com/v2/lmd/hiring/frontend/take-home/pizza-pricing'];
      try {
        const data = await Promise.all(urls.map(async url => {
          const resp = await fetch(url);
          return resp.json();
        }));
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
        const errMessage = typeof err == 'string' ? err : JSON.stringify(err)
        setError(errMessage);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); 

  console.log(fetchedData)

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

   return (
    <>
    <h1>Menu Page</h1>
    <PizzaOrderForm2 toppings={fetchedData.toppings} pizzaData={fetchedData.pizzas}/>
    </>
   )
};

export default Menu;