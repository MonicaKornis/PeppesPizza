import { useEffect, useState } from "react";
 // @ts-ignore
import Spinner  from "./../assets/spinner.svg?react";
import styled from "styled-components";
import { editPizzaStatus, fetchAllOrders } from "../api/service";
import OrdersTable from "../components/OrderTable/OrderTable";
import { HiringFrontendTakeHomeOrderRequest, HiringFrontendTakeHomeOrderStatus } from "../types";

const PageContainer = styled.div`
    margin: 250px;
`;

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
    }, []); 

    
    if(isLoading) return <PageContainer><Spinner /></PageContainer>;
    if(error) return <>{error}</>;

    const handleSaveClick = (orderId: string, selectedVal?: string) => {
      try {
        editPizzaStatus(orderId, selectedVal as HiringFrontendTakeHomeOrderStatus)
      } catch(err) {
        setError(JSON.stringify(err));
      }
    }


    return (
        <div>
          <OrdersTable orders={orderData} saveFunction={handleSaveClick} type='edit'/>
        </div>
    )
}
export default AllOrders;