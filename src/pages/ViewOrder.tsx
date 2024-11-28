import {  useState } from "react";
import styled from "styled-components";
import { fetchOrderById } from "../api/service";
import OrdersTable from "../components/OrderTable/OrderTable";
import { HiringFrontendTakeHomeOrderRequest } from "../types";

const InputContainer = styled.div`
    margin: 66px auto;
    width: 58%;
    display: flex
;
`;

export const Input = styled.input`
  width: 97%;
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  background-color: white;
  font-size: 1rem;
  color: #4a5568;
  cursor: pointer;

&:focus {
  outline: none;
  border-color: #3182ce;
  box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.1);
}
`;

export const SubmitButton = styled.button`
  width: 60%;
  background-color: #3182ce;
  color: white;
  border: none;
  border-radius: 0rem 0.375rem 0.375rem 0rem;
  font-size: 1.15rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  font-family: "Zilla Slab", serif;
  height: 35px;

  &:hover {
    background-color: #2c5282;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.5);
  }
`;

const AllOrders = () => {

    const [orderData, setorderData] = useState<HiringFrontendTakeHomeOrderRequest[]>([]);
    const [isLoading, setIsLoading] = useState('');
    const [error, setError] = useState("");
    const [orderId, setOrderId] = useState("");

    const handleInputChange = (e) => {
        setOrderId(e.target.value)
    }
  
    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const data = await fetchAllOrders();
    //       setorderData(data.orders);
    //       setIsLoading(false);
    //     } catch (err) {
    //       console.log(err)
    //       const errMessage = typeof err == 'string' ? err : JSON.stringify(err)
    //       setError(errMessage);
    //       setIsLoading(false);
    //     }
    //   };
  
    //   fetchData();



      // setorderData(orders)
    // }, []); 

    if(isLoading) return <>Loading..</>;
    if(error) return <>{error}</>

    return (
        <div>
            <InputContainer>
                <Input onChange={handleInputChange}/>
                <SubmitButton>Check Order Status</SubmitButton>
            </InputContainer>
          { orderData.length > 0 ? <OrdersTable orders={orderData}/> : null }
        </div>
    )
}
export default AllOrders;