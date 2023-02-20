import PropTypes from 'prop-types';
import { TransactionsTable, TransactionsTr } from './Transactions.styled';
export const Transactions = ({ items }) => {
  return (
    <TransactionsTable>
      <thead>
        <TransactionsTr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TransactionsTr>
      </thead>

      <tbody>
        {items.map(item => {
          return (
            <TransactionsTr key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </TransactionsTr>
          );
        })}
      </tbody>
    </TransactionsTable>
  );
};

Transactions.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ),
};
