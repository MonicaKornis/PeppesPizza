import React, { useState } from 'react';
import styled from 'styled-components';
import { HiringFrontendTakeHomeOrderRequest, HiringFrontendTakeHomeOrderStatus } from '../../types';
import Pagination from './../../components/PaginationControls/PaginationControls';


// Styled Components for Table
const TableContainer = styled.div`
    width: 100%;
    overflow-x: auto;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledTable = styled.table`
  width: 90%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  background-color: #f4f4f4;
  padding: 12px;
  text-align: left;
  border-bottom: 2px solid #ddd;
  font-weight: bold;
`;

const TableRow = styled.tr`
  height: 15px;
  max-height: 20px;
  &:nth-child(even) {
    background-color: #f9f9f9;
  }

  &:hover {
    background-color: #f1f1f1;
  }
`;

const TableCell = styled.td`
  max-height: 20px;
  padding: 12px;
  border-bottom: 1px solid #ddd;
`;

// Type for Orders Table Props
interface OrdersTableProps {
  orders: HiringFrontendTakeHomeOrderRequest[];
  saveFunction: (orderId: string, selectedVal?: string) => void;
  type: 'cancel' | 'edit';
}

const OrdersTable: React.FC<OrdersTableProps> = ({ orders, saveFunction, type }) => {

  const [perPage, setPerPage] = useState(5);
  const [currPage, setCurrPage] = useState(0);
  const totalPages = Math.floor(orders.length/perPage);
  const [updatedSelectVal, setUpdatedSelectVal] = useState('');

  const [editRowId, setEditRowId] = React.useState(null);

  const handleEditClick = (rowId) => {
    setEditRowId(rowId);
  };

  const handleSelectChange = (selectVal: HiringFrontendTakeHomeOrderStatus) => {
    setUpdatedSelectVal(selectVal);
  };


  return (
    <>
    <TableContainer>
      <StyledTable>
        <thead>
          <tr>
            <TableHeader>ID</TableHeader>
            <TableHeader>First Name</TableHeader>
            <TableHeader>Last Name</TableHeader>
            <TableHeader>Total Amount</TableHeader>
            <TableHeader>Payment Method</TableHeader>
            <TableHeader>Order Type</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Edit</TableHeader>
          </tr>
        </thead>
        <tbody>
          {orders
            .slice(currPage * perPage, (currPage + 1) * perPage)
            .map((order,index) => (
            <TableRow key={index}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.customer.firstName}</TableCell>
              <TableCell>{order.customer.lastName}</TableCell>
              <TableCell>${order.totalAmount.toFixed(2)}</TableCell>
              <TableCell>{order.paymentMethod}</TableCell>
              <TableCell>{order.type}</TableCell>
              <TableCell>
                <p>Order Status</p>
                <select disabled={order.id !== editRowId} onChange={(e) => handleSelectChange(e.target.value as HiringFrontendTakeHomeOrderStatus)}>
                  <option value='pending' selected={order.status === 'pending'}>
                    Pending
                  </option>
                  <option value='preparing' selected={order.status === 'preparing'}>
                    Preparing
                  </option>
                  <option value='ready' selected={order.status === 'ready'}>Ready
                  </option>
                  <option value='delivered' selected={order.status === 'delivered'}>
                    Delivered
                  </option>
                  <option value='cancelled' selected={order.status === 'cancelled'}>
                    Cancelled
                  </option>
                </select></TableCell>
              {type === 'edit' ? <TableCell>{editRowId === order.id ? <button onClick={() => {
                saveFunction(order.id || '', updatedSelectVal)
                setEditRowId(null)
                }}>Save</button> : <button onClick={() => handleEditClick(order.id)}>Edit</button>}</TableCell>
                : (
                  type === 'cancel' && order.status === 'pending' ?   <TableCell><button onClick={() => saveFunction(order.id || '')}>Cancel</button></TableCell> : null
                )
              }
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
    <Pagination 
          onChange={(newPerPage) => {
            setPerPage(newPerPage);
            setCurrPage(0);
          }}
         perPage={perPage}
         currPage={currPage}
         totalPages={totalPages}
         onChangePage={(newPage) => {setCurrPage(newPage)}}
      />
    </>
  );
};

export default OrdersTable;