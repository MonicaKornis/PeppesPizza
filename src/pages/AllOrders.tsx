import { useEffect, useState } from "react";
// import { fetchAllOrders } from "../api/service";
import OrdersTable from "../components/OrderTable/OrderTable";
import { HiringFrontendTakeHomeOrderRequest } from "../types";

const orders =  [
  {
  "totalAmount": 15.49,
  "updatedAt": 1732750178,
  "status": "pending",
  "createdAt": 1732750178,
  "locationId": "m-kornis",
  "paymentMethod": "cash",
  "customer": {
  "firstName": "Monica",
  "lastName": "Kornis",
  "deliveryAddress": {
  "zipCode": "",
  "state": "",
  "city": "",
  "street": ""
  },
  "email": "2011mkornis@gmail.com"
  },
  "id": "5ef648ad-dd79-474f-8712-d0c998696cd1",
  "creditCardNumber": "",
  "items": [
  {
  "id": "74fa2ba0-ad17-11ef-b5d9-33a2be15ae6c",
  "pizza": {
  "toppings": [
  {
  "name": "pepperoni",
  "price": 1.5,
  "quantity": "regular"
  }
  ],
  "toppingExclusions": [],
  "quantity": 1,
  "type": "custom",
  "size": "medium",
  "totalPrice": 15.49
  }
  }
  ],
  "type": "pickup"
  },
  {
  "totalAmount": 15.49,
  "updatedAt": 1732750293,
  "status": "pending",
  "createdAt": 1732750293,
  "locationId": "m-kornis",
  "paymentMethod": "cash",
  "customer": {
  "firstName": "m",
  "lastName": "n",
  "deliveryAddress": {
  "zipCode": "",
  "state": "",
  "city": "",
  "street": ""
  },
  "email": "2011mkornis@gmail.com"
  },
  "id": "bcd94e75-caa9-4bd5-968c-3e268000f416",
  "creditCardNumber": "",
  "items": [
  {
  "id": "74fa2ba0-ad17-11ef-b5d9-33a2be15ae6c",
  "pizza": {
  "toppings": [
  {
  "name": "pepperoni",
  "price": 1.5,
  "quantity": "regular"
  }
  ],
  "toppingExclusions": [],
  "quantity": 1,
  "type": "custom",
  "size": "medium",
  "totalPrice": 15.49
  }
  }
  ],
  "type": "pickup"
  }
  ]

const AllOrders = () => {

    const [orderData, setorderData] = useState<HiringFrontendTakeHomeOrderRequest[]>([]);
    // const [isLoading, setIsLoading] = useState(true);
    // const [error, setError] = useState("");
  
    useEffect(() => {
      // const fetchData = async () => {
      //   try {
      //     const data = await fetchAllOrders();
      //     setorderData(data.orders);
      //     setIsLoading(false);
      //   } catch (err) {
      //     console.log(err)
      //     const errMessage = typeof err == 'string' ? err : JSON.stringify(err)
      //     setError(errMessage);
      //     setIsLoading(false);
      //   }
      // };
  
      // fetchData();
      setorderData(orders)
    }, []); 

    // if(isLoading) return <>Loading..</>;
    // if(error) return <>{error}</>

    return (
        <div>
          <OrdersTable orders={orderData}/>
        </div>
    )
}
export default AllOrders;