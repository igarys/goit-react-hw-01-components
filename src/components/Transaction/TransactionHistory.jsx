import './TransactionHistory.css';

export const TransactionHistory = ({ items }) => {
    return (
      <table className="transaction-history">
        <thead className="transaction-head">
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody className="transaction-body">
          {items.map(item => (
            <tr className="transaction-item" key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}