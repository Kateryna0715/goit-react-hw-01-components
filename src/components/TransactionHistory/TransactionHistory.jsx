import CSS from './index.module.css';

const TransactionHistory = items => {
  return (
    <table className={CSS.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{getTransaction(items)}</tbody>
    </table>
  );
};
function getTransaction(data) {
  return data.items.map(item => (
    <tr key={item.id}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
  ));
}

export default TransactionHistory;
