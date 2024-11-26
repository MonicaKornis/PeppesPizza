import { useState, useEffect } from 'react';
import PizzaOrderForm2 from './../components/PizzaOrderForm/PizzaOrderForm2';

// const pizzaTypes = [
//      {
//        id: "1d4f6a77-ef14-4b4a-b81e-a32c78f54bc1",
//        name: "Ultimate Carnivore",
//        group: "meat lovers",
//        toppings: [
//          "pepperoni",
//          "sausage",
//          "bacon",
//          "ham"
//        ],
//        description: "Loaded with all the meats: pepperoni, sausage, bacon, and ham.",
//        price: {
//          small: 12.99,
//          medium: 15.49,
//          large: 18.99
//        }
//      },
//      {
//        id: "1f2d3c64-cc21-4c48-b91e-e61a6dc8f1c3",
//        name: "Bacon Bonanza",
//        group: "meat lovers",
//        toppings: [
//          "bacon",
//          "ham",
//          "sausage"
//        ],
//        description: "Crispy bacon, savory ham, and juicy sausage on every slice.",
//        price: {
//          small: 11.49,
//          medium: 14.99,
//          large: 17.49
//        }
//      },
//      {
//        id: "3b7e3c9f-e6ed-4d32-8e5a-69e8e8b0dcd1",
//        name: "Pepperoni Overload",
//        group: "meat lovers",
//        toppings: [
//          "pepperoni",
//          "extra cheese"
//        ],
//        description: "A pepperoni lover's dream with double pepperoni and extra cheese.",
//        price: {
//          small: 10.99,
//          medium: 13.99,
//          large: 16.99
//        }
//      },
//      {
//        id: "21a6e17c-25e7-4c88-b8a7-b7a5a9c4ab51",
//        name: "Sausage Supreme",
//        group: "meat lovers",
//        toppings: [
//          "sausage",
//          "pepperoni",
//          "bacon"
//        ],
//        description: "Packed with sausage, pepperoni, and bacon for a meaty feast.",
//        price: {
//          small: 12.49,
//          medium: 15.49,
//          large: 18.49
//        }
//      },
//      {
//        id: "4b1a6f21-a35d-429f-9e11-053f04d2a47b",
//        name: "Ham Havoc",
//        group: "meat lovers",
//        toppings: [
//          "ham",
//          "bacon",
//          "sausage"
//        ],
//        description: "Deliciously loaded with ham, bacon, and sausage for true meat lovers.",
//        price: {
//          small: 11.99,
//          medium: 14.49,
//          large: 17.99
//        }
//      },
//      {
//        id: "94c6f671-8287-4d76-928a-f6f56984390b",
//        name: "Triple Meat Feast",
//        group: "meat lovers",
//        toppings: [
//          "pepperoni",
//          "ham",
//          "bacon"
//        ],
//        description: "A powerful trio of pepperoni, ham, and bacon.",
//        price: {
//          small: 12.49,
//          medium: 15.99,
//          large: 18.49
//        }
//      },
//      {
//        id: "50e3b24f-965b-4f41-b92a-1328e12862a1",
//        name: "All Meat Deluxe",
//        group: "meat lovers",
//        toppings: [
//          "sausage",
//          "pepperoni",
//          "ham",
//          "bacon"
//        ],
//        description: "All the best meats in one pizza. Satisfy your cravings.",
//        price: {
//          small: 13.49,
//          medium: 16.99,
//          large: 19.49
//        }
//      },
//      {
//        id: "5bff5c97-5e68-4ae6-9f17-3f5c9c4d6d3a",
//        name: "Classic Meat Lovers",
//        group: "meat lovers",
//        toppings: [
//          "pepperoni",
//          "sausage",
//          "ham"
//        ],
//        description: "Classic meat toppings with pepperoni, sausage, and ham.",
//        price: {
//          small: 11.99,
//          medium: 14.99,
//          large: 17.49
//        }
//      },
//      {
//        id: "7c2a9437-6b29-4cf6-b649-34f5b12a3e2b",
//        name: "Savory Meat Medley",
//        group: "meat lovers",
//        toppings: [
//          "sausage",
//          "bacon",
//          "ham",
//          "extra cheese"
//        ],
//        description: "A cheesy, meaty medley with sausage, bacon, and ham.",
//        price: {
//          small: 13.99,
//          medium: 16.49,
//          large: 19.99
//        }
//      },
//      {
//        id: "af3d5b71-bf6d-49db-9cd5-2e41a17d3b3e",
//        name: "Loaded Meat Combo",
//        group: "meat lovers",
//        toppings: [
//          "pepperoni",
//          "sausage",
//          "ham",
//          "bacon"
//        ],
//        description: "Fully loaded with every meat for the ultimate pizza experience.",
//        price: {
//          small: 12.99,
//          medium: 15.99,
//          large: 18.99
//        }
//      },
//      {
//        id: "93b6e573-3e47-46d6-9243-d87c6f0d823c",
//        name: "Garden Delight",
//        group: "veggie lovers",
//        toppings: [
//          "mushrooms",
//          "onions",
//          "green peppers",
//          "black olives"
//        ],
//        description: "A fresh and delightful mix of mushrooms, onions, green peppers, and olives.",
//        price: {
//          small: 11.49,
//          medium: 13.99,
//          large: 16.49
//        }
//      },
//      {
//        id: "6f4b9a9b-19d4-4026-bcc8-3b5ff9b4d6f8",
//        name: "Veggie Supreme",
//        group: "veggie lovers",
//        toppings: [
//          "mushrooms",
//          "onions",
//          "green peppers",
//          "extra cheese"
//        ],
//        description: "A supreme mix of fresh vegetables with extra cheese.",
//        price: {
//          small: 12.49,
//          medium: 14.99,
//          large: 17.49
//        }
//      },
//      {
//        id: "4b9e3f6a-35d2-4d91-830d-20c4c1d8f3a7",
//        name: "Mediterranean Veggie",
//        group: "veggie lovers",
//        toppings: [
//          "black olives",
//          "green peppers",
//          "onions"
//        ],
//        description: "Flavors of the Mediterranean with black olives, green peppers, and onions.",
//        price: {
//          small: 11.99,
//          medium: 14.49,
//          large: 16.99
//        }
//      },
//      {
//        id: "e2d4f678-1b8e-4c4d-8bc9-3f9c6e57a7d2",
//        name: "Cheesy Veggie",
//        group: "veggie lovers",
//        toppings: [
//          "extra cheese",
//          "mushrooms",
//          "onions"
//        ],
//        description: "Extra cheesy with mushrooms and onions.",
//        price: {
//          small: 11.49,
//          medium: 13.99,
//          large: 16.49
//        }
//      },
//      {
//        id: "34c8fba6-9d64-48b7-bc8f-6fbc8e47a0c3",
//        name: "Veggie Lovers' Delight",
//        group: "veggie lovers",
//        toppings: [
//          "mushrooms",
//          "onions",
//          "black olives",
//          "green peppers"
//        ],
//        description: "Perfect mix for veggie lovers.",
//        price: {
//          small: 10.99,
//          medium: 13.49,
//          large: 15.99
//        }
//      },
//      {
//        id: "9b4d8f64-3b4d-4c8f-b89a-8c3e4d1b2d5e",
//        name: "Pepper & Olive Veggie",
//        group: "veggie lovers",
//        toppings: [
//          "green peppers",
//          "black olives",
//          "extra cheese"
//        ],
//        description: "Green peppers and olives with extra cheese.",
//        price: {
//          small: 11.99,
//          medium: 14.49,
//          large: 17.49
//        }
//      },
//      {
//        id: "5f4a3b9d-2b4a-42f8-9a3b-6b4c9a8f2d6e",
//        name: "Fresh Veggie Medley",
//        group: "veggie lovers",
//        toppings: [
//          "mushrooms",
//          "green peppers",
//          "onions"
//        ],
//        description: "A fresh medley of vegetables.",
//        price: {
//          small: 10.49,
//          medium: 13.49,
//          large: 16.49
//        }
//      },
//      {
//        id: "3a4e2b6c-4f4d-4b8f-93c6-7a9c8d4b2f6e",
//        name: "Green & Gold",
//        group: "veggie lovers",
//        toppings: [
//          "green peppers",
//          "onions",
//          "extra cheese"
//        ],
//        description: "Green peppers and onions with a generous layer of extra cheese.",
//        price: {
//          small: 10.99,
//          medium: 13.49,
//          large: 15.99
//        }
//      },
//      {
//        id: "6b3e2a5d-7f6b-47f9-88e6-4b5c7d9b1f2c",
//        name: "Mushroom & Olive",
//        group: "veggie lovers",
//        toppings: [
//          "mushrooms",
//          "black olives",
//          "extra cheese"
//        ],
//        description: "Earthy mushrooms and olives with extra cheese.",
//        price: {
//          small: 11.99,
//          medium: 14.49,
//          large: 16.99
//        }
//      },
//      {
//        id: "8d3c4b9f-5e3b-45a7-85c8-3b5d6a8b2c9f",
//        name: "Ultimate Veggie",
//        group: "veggie lovers",
//        toppings: [
//          "mushrooms",
//          "onions",
//          "black olives",
//          "green peppers"
//        ],
//        description: "All the veggies on one delicious pizza.",
//        price: {
//          small: 12.49,
//          medium: 15.49,
//          large: 18.49
//        }
//      },
//      {
//        id: "ab4f5d9e-8c6f-49f7-9a3d-6e7c5d9b3c1e",
//        name: "Tropical Twist",
//        group: "new recipes",
//        toppings: [
//          "pineapple",
//          "ham",
//          "green peppers"
//        ],
//        description: "A sweet and savory combination with pineapple and ham.",
//        price: {
//          small: 11.99,
//          medium: 14.99,
//          large: 17.99
//        }
//      },
//      {
//        id: "8b3d2e6f-4f7a-4b5a-93f6-5a7d4c6b8f3e",
//        name: "Hawaiian Heat",
//        group: "new recipes",
//        toppings: [
//          "pineapple",
//          "bacon",
//          "onions"
//        ],
//        description: "A tropical twist with a hint of heat from onions.",
//        price: {
//          small: 11.49,
//          medium: 13.99,
//          large: 16.49
//        }
//      },
//      {
//        id: "f6b8e3c4-6b7d-4f2a-9b7e-6a3c4b9d2f5e",
//        name: "Sweet & Spicy",
//        group: "new recipes",
//        toppings: [
//          "pineapple",
//          "bacon",
//          "green peppers"
//        ],
//        description: "A unique blend of sweetness and spice.",
//        price: {
//          small: 11.99,
//          medium: 14.49,
//          large: 17.49
//        }
//      },
//      {
//        id: "6e8c3a4d-2f5b-4b7f-98e6-5b3a8f9c7d4e",
//        name: "Island Adventure",
//        group: "new recipes",
//        toppings: [
//          "pineapple",
//          "ham",
//          "extra cheese"
//        ],
//        description: "Tropical island flavors with a cheesy twist.",
//        price: {
//          small: 10.99,
//          medium: 13.49,
//          large: 15.99
//        }
//      },
//      {
//        id: "2c3f7b8a-6b5e-48a9-8e6d-7f3a9d4e6b5e",
//        name: "Pineapple Perfection",
//        group: "new recipes",
//        toppings: [
//          "pineapple",
//          "bacon",
//          "onions",
//          "extra cheese"
//        ],
//        description: "Perfect balance of pineapple, bacon, and cheese.",
//        price: {
//          small: 12.49,
//          medium: 15.49,
//          large: 17.99
//        }
//      },
//      {
//        id: "5d4b3a8e-7c5d-4b9f-83a9-8c3f5d2b7e6d",
//        name: "Hawaiian Supreme",
//        group: "new recipes",
//        toppings: [
//          "pineapple",
//          "ham",
//          "green peppers",
//          "extra cheese"
//        ],
//        description: "A tropical and cheesy delight.",
//        price: {
//          small: 11.99,
//          medium: 14.49,
//          large: 17.49
//        }
//      },
//      {
//        id: "9b2a8c7d-4f5b-4e9a-8c6b-5d3a9f2e7c5b",
//        name: "Tropical Medley",
//        group: "new recipes",
//        toppings: [
//          "pineapple",
//          "ham",
//          "green peppers",
//          "bacon"
//        ],
//        description: "A medley of tropical flavors.",
//        price: {
//          small: 12.49,
//          medium: 15.49,
//          large: 18.49
//        }
//      },
//      {
//        id: "3f4a5c8b-7f9a-4e5d-88e6-6a3b7f5d8c9e",
//        name: "Spicy Pineapple",
//        group: "new recipes",
//        toppings: [
//          "pineapple",
//          "onions",
//          "green peppers"
//        ],
//        description: "A unique pizza with spicy green peppers and pineapple.",
//        price: {
//          small: 11.49,
//          medium: 13.99,
//          large: 16.99
//        }
//      },
//      {
//        id: "6b4c3f8a-2b5a-47e9-8f3d-4c8a9b5e7f6d",
//        name: "Savory & Sweet",
//        group: "new recipes",
//        toppings: [
//          "ham",
//          "pineapple",
//          "green peppers"
//        ],
//        description: "Sweet and savory mix of ham, pineapple, and green peppers.",
//        price: {
//          small: 10.99,
//          medium: 13.49,
//          large: 15.99
//        }
//      },
//      {
//        id: "8d3b6e5a-7b4c-4a8f-8d6c-3b9a7f2c4d6e",
//        name: "Island Spice",
//        group: "new recipes",
//        toppings: [
//          "pineapple",
//          "bacon",
//          "extra cheese"
//        ],
//        description: "Sweet pineapple with a touch of bacon and cheese.",
//        price: {
//          small: 12.49,
//          medium: 15.99,
//          large: 18.49
//        }
//      },
//      {
//        id: "6f4a8c5b-3f9e-4b7a-92d6-5e7b3c4d8a2b",
//        name: "Classic Pepperoni",
//        group: "classics",
//        toppings: [
//          "pepperoni"
//        ],
//        description: "A true classic, loaded with pepperoni.",
//        price: {
//          small: 9.99,
//          medium: 12.49,
//          large: 14.99
//        }
//      },
//      {
//        id: "8c3f7d4a-5e7b-42f9-8a4c-6a9d3f2b5c4d",
//        name: "Four Cheese",
//        group: "classics",
//        toppings: [
//          "extra cheese"
//        ],
//        description: "A pizza loaded with extra cheese for cheese lovers.",
//        price: {
//          small: 10.49,
//          medium: 13.49,
//          large: 15.99
//        }
//      },
//      {
//        id: "7f3b8c5e-9a4d-4c7b-98e6-5a3d4f2c9a8e",
//        name: "Hawaiian Classic",
//        group: "classics",
//        toppings: [
//          "ham",
//          "pineapple"
//        ],
//        description: "A sweet and savory classic with ham and pineapple.",
//        price: {
//          small: 10.99,
//          medium: 13.99,
//          large: 16.49
//        }
//      },
//      {
//        id: "9d3a5b8f-2b7e-4c9f-9a6b-5f7c8a3d4e6b",
//        name: "Veggie Classic",
//        group: "classics",
//        toppings: [
//          "mushrooms",
//          "onions",
//          "green peppers"
//        ],
//        description: "A timeless mix of fresh vegetables.",
//        price: {
//          small: 10.49,
//          medium: 13.49,
//          large: 15.99
//        }
//      },
//      {
//        id: "5f2c7d8b-6e4a-4b8f-93d7-4a3b9e6f5c2a",
//        name: "Mushroom Classic",
//        group: "classics",
//        toppings: [
//          "mushrooms",
//          "extra cheese"
//        ],
//        description: "Classic mushrooms with extra cheese.",
//        price: {
//          small: 9.99,
//          medium: 12.99,
//          large: 15.49
//        }
//      },
//      {
//        id: "3b6a8d4c-7f9e-42c9-89e6-6a8b4f5d3a7e",
//        name: "Olive & Cheese",
//        group: "classics",
//        toppings: [
//          "black olives",
//          "extra cheese"
//        ],
//        description: "Classic olives with extra cheese for a bold flavor.",
//        price: {
//          small: 10.49,
//          medium: 13.49,
//          large: 16.49
//        }
//      },
//      {
//        id: "2c9a5f3e-6b4d-48a7-98f5-5e7a3d4b9c6f",
//        name: "Pepperoni & Mushroom",
//        group: "classics",
//        toppings: [
//          "pepperoni",
//          "mushrooms"
//        ],
//        description: "A classic duo of pepperoni and mushrooms.",
//        price: {
//          small: 11.49,
//          medium: 13.99,
//          large: 16.99
//        }
//      },
//      {
//        id: "5e7a3f8b-4c9a-47d8-8f6d-3b9e2c5d7f4a",
//        name: "The Veggie Mix",
//        group: "classics",
//        toppings: [
//          "mushrooms",
//          "black olives",
//          "onions"
//        ],
//        description: "An easy classic with a variety of veggies.",
//        price: {
//          small: 10.99,
//          medium: 13.49,
//          large: 16.49
//        }
//      },
//      {
//        id: "3b5f9e6c-2a7d-4b8f-92c6-6d9a8f4b7c3e",
//        name: "Cheese Lover's Dream",
//        group: "classics",
//        toppings: [
//          "extra cheese",
//          "mushrooms",
//          "black olives"
//        ],
//        description: "Extra cheese with classic veggie toppings.",
//        price: {
//          small: 11.99,
//          medium: 14.49,
//          large: 17.49
//        }
//      },
//      {
//        id: "7d4e8b6f-5c9a-4b3f-8a5e-4c3d9a7f2e6b",
//        name: "Old School Veggie",
//        group: "classics",
//        toppings: [
//          "onions",
//          "green peppers",
//          "black olives"
//        ],
//        description: "A timeless veggie classic.",
//        price: {
//          small: 10.49,
//          medium: 13.49,
//          large: 16.49
//        }
//      }
//    ]

// const toppings = {
//    size: {
//      small: 10.99,
//      medium: 13.99,
//      large: 16.99
//    },
//    toppingPrices: {
//      pepperoni: {
//        light: 0.75,
//        regular: 1.5,
//        extra: 2.25
//      },
//      mushrooms: {
//        light: 0.5,
//        regular: 1,
//        extra: 1.5
//      },
//      onions: {
//        light: 0.5,
//        regular: 1,
//        extra: 1.5
//      },
//      sausage: {
//        light: 1,
//        regular: 2,
//        extra: 3
//      },
//      bacon: {
//        light: 1,
//        regular: 2,
//        extra: 3
//      },
//      extra_cheese: {
//        light: 0.75,
//        regular: 1.5,
//        extra: 2.25
//      },
//      black_olives: {
//        light: 0.5,
//        regular: 1,
//        extra: 1.5
//      },
//      green_peppers: {
//        light: 0.5,
//        regular: 1,
//        extra: 1.5
//      },
//      pineapple: {
//        light: 0.75,
//        regular: 1.5,
//        extra: 2.25
//      },
//      ham: {
//        light: 0.75,
//        regular: 1.5,
//        extra: 2.25
//      }
//    }
//  }
   

const Menu = () =>  {

  const [fetchedData, setFetchedData] = useState({pizzas: {}, toppings: {}});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const urls = ['https://api.sparrowtest.com/v2/lmd/hiring/frontend/take-home/specialty-pizzas', 'https://api.sparrowtest.com/v2/lmd/hiring/frontend/take-home/pizza-pricing'];
      try {
        const data = await Promise.all(urls.map(async url => {
          const resp = await fetch(url);
          return resp.json();
        }));
        let pizzaTypes = data[0].specialtyPizzas;
        let pizzaData = {}
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
        console.log(error)
        setError(err);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); 

  console.log(fetchedData)
  // Render loading or error states
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  //  const pizzaData = {};
  //  pizzaData['custom'] = {
  //     description: "Choose your own toppings for a pizza customized to you!", 
  //     price: toppings.size,
  //     toppings: []
  //  }
  //  pizzaTypes.forEach((pizza) => {
  //     pizzaData[pizza.name] = pizza;
  //  })

   return (
    <>
    <h1>Menu Page</h1>
    <PizzaOrderForm2 toppings={fetchedData.toppings} pizzaData={fetchedData.pizzas}/>
    </>
   )
};

export default Menu;