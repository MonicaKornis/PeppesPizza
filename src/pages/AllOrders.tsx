import { useEffect, useState } from "react";
import { fetchAllOrders } from "../api/service";
import OrdersTable from "../components/OrderTable/OrderTable";
import { HiringFrontendTakeHomeOrderRequest } from "../types";

const AllOrders = () => {

    const [orderData, setorderData] = useState<HiringFrontendTakeHomeOrderRequest[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await fetchAllOrders();
          setorderData(data.orders);
          setIsLoading(false);
        } catch (err) {
          console.log(err)
          const errMessage = typeof err == 'string' ? err : JSON.stringify(err)
          setError(errMessage);
          setIsLoading(false);
        }
      };
  
      fetchData();



      // setorderData(orders)
    }, []); 

    if(isLoading) return <>Loading..</>;
    if(error) return <>{error}</>

    return (
        <div>
          <OrdersTable orders={orderData}/>
        </div>
    )
}
export default AllOrders;