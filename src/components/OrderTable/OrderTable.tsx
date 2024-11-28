import React from 'react';
import styled from 'styled-components';
import { HiringFrontendTakeHomeOrderRequest } from '../../types';

// Styled Components for Table
const TableContainer = styled.div`
    width: 100%;
    overflow-x: auto;
    margin-top: 30px;
    display: flex;
    justify-content: center;
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
  &:nth-child(even) {
    background-color: #f9f9f9;
  }

  &:hover {
    background-color: #f1f1f1;
  }
`;

const TableCell = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ddd;
`;

// Type for Orders Table Props
interface OrdersTableProps {
  orders: HiringFrontendTakeHomeOrderRequest[];
}

const OrdersTable: React.FC<OrdersTableProps> = ({ orders }) => {
  return (
    <TableContainer>
      <StyledTable>
        <thead>
          <tr>
            <TableHeader>Location ID</TableHeader>
            <TableHeader>First Name</TableHeader>
            <TableHeader>Last Name</TableHeader>
            <TableHeader>Total Amount</TableHeader>
            <TableHeader>Payment Method</TableHeader>
            <TableHeader>Order Type</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Items Count</TableHeader>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <TableRow key={index}>
              <TableCell>{order.locationId}</TableCell>
              <TableCell>{order.customer.firstName}</TableCell>
              <TableCell>{order.customer.lastName}</TableCell>
              <TableCell>${order.totalAmount.toFixed(2)}</TableCell>
              <TableCell>{order.paymentMethod}</TableCell>
              <TableCell>{order.type}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>{order.items.length}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};

export default OrdersTable;