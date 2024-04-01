import css from './TransactionHistory.module.css';
export default function TransactionHistory({ items }) {
  const lines = items.map(({ id, type, amount, currency }) => {
    return (
      <tr key={id} className={css.rows}>
        <td className={css.cell}>{type}</td>
        <td className={css.cell}>{amount}</td>
        <td className={css.cell}>{currency}</td>
      </tr>
    );
  });

  return (
    <table className={css.table}>
      <thead >
        <tr className={css.rows}>
          <th className={css.cell}>Type</th>
          <th className={css.cell}>Amount</th>
          <th className={css.cell}>Currency</th>
        </tr>
      </thead>
      <tbody>{lines}</tbody>
    </table>
  );
}
