import styled from 'styled-components';

export const TransactionsTable = styled.table`
  font-family: 'Lucida Sans Unicode', 'Lucida Grande', Sans-Serif;
  border-collapse: collapse;
  color: #686461;
`;

export const TransactionsTr = styled.tr`
  &:nth-child(odd) {
    background: white;
  }
  &:nth-child(even) {
    background: #e8e6d1;
  }
`;
