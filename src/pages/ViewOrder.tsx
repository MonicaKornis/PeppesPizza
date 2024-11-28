import {  useState } from "react";
import styled from "styled-components";
import { fetchOrderById, cancelOrder } from "../api/service";
import OrdersTable from "../components/OrderTable/OrderTable";
 // @ts-ignore
import Spinner  from  "./../assets/spinner.svg?react";
import { HiringFrontendTakeHomeOrderRequest } from "../types";

const PageContainer = styled.div`
    margin: 250px;
`;

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

    const [orderData, setOrderData] = useState<HiringFrontendTakeHomeOrderRequest[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [orderId, setOrderId] = useState("");
    const [success, setSuccess] = useState(false);


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderId(e.target.value)
    }

    if(success) return <PageContainer><h3>{`You have successfully canceled your order #${orderId}!`}</h3></PageContainer>
    if(isLoading) return <PageContainer><Spinner /></PageContainer>;
    if(error) return  <PageContainer><div>{error}</div></PageContainer>;


    const onClick = async () => {
        try {
            const orderData = await fetchOrderById(orderId)
            setError('')
            setOrderData([orderData.order]);
        } catch(err) {
            console.error(err)
            setError(JSON.stringify(err))
        }
    }

    const handleCancel = async () => {
      setIsLoading(true);
        try {
            const orderData = await cancelOrder(orderId)
            setError('')
            setOrderData([orderData.order]);
            setSuccess(true)
        } catch(err) {
            console.error(err)
            setError(JSON.stringify(err))
        } finally {
          setIsLoading(false);
        }
    }

    return (
        <div>
            <InputContainer>
                <Input onChange={handleInputChange}/>
                <SubmitButton onClick={onClick}>Check Order Status</SubmitButton>
            </InputContainer>
            <div>{error}</div>
          { orderData.length > 0 ? <OrdersTable orders={orderData} saveFunction={handleCancel} type='cancel'/> : null }
        </div>
    )
}
export default AllOrders;