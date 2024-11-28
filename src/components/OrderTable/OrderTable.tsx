import React, { useState } from 'react';
import styled from 'styled-components';
import { HiringFrontendTakeHomeOrderRequest } from '../../types';
import Pagination from './../../components/PaginationControls/PaginationControls';

// Styled Components for Table
const TableContainer = styled.div`
    width: 100%;
    overflow-x: auto;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    overflow-y: scroll;
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
}

const OrdersTable: React.FC<OrdersTableProps> = ({ orders }) => {

  const [perPage, setPerPage] = useState(5);
  const [currPage, setCurrPage] = useState(0);
  const totalPages = Math.floor(orders.length/perPage);

  console.log(Math.floor(orders.length/perPage), 'cals')
  console.log(totalPages, 'totalapages')
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
            {/* <TableHeader>Items Count</TableHeader> */}
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
                <select>
                  <option value='pending' selected={order.status === 'pending'}>
                    Pending
                  </option>
                  <option value='preparing' selected={order.status === 'preparing'}>
                    Preparing
                  </option>
                  <option value='ready' selected={order.status === 'ready'}>
                  </option>
                  <option value='delivered' selected={order.status === 'delivered'}>
                    Delivered
                  </option>
                  <option value='cancelled' selected={order.status === 'cancelled'}>
                    Cancelled
                  </option>
                </select></TableCell>
              {/* <TableCell>{order.items.length}</TableCell> */}
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
    <Pagination 
          onChange={(newPerPage) => {
            setPerPage(newPerPage);
            setCurrPage(0);
            setTotalPages(Math.floor(orders.length / newPerPage));
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