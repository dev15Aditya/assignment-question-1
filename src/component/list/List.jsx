import ListRow from './ListRow';
import ListRowCell from './ListRowCell';

import ListHeader from './ListHeader';
import ListHeaderCell from './ListHeaderCell';

import styles from './List.module.css';

const List = ({ rows, selectedCurrency, handleClick }) => {
  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / {selectedCurrency}</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <ListRow
            key={`listRow_${index}`}
            row={row}
            selectedCurrency={selectedCurrency}
            onClick={() => handleClick(row)}
          >
            <ListRowCell>{row['&id']}</ListRowCell>
            <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
            <ListRowCell>{row.timestamps.orderSubmitted}</ListRowCell>
            <ListRowCell>
              {row.bestExecutionData.orderVolume[selectedCurrency].toFixed(2)}{' '}
              {selectedCurrency}
            </ListRowCell>
          </ListRow>
        ))}
      </tbody>
    </table>
  );
};

export default List;
