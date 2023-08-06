import { useEffect, useMemo, useState } from 'react';

// Data
import mockData from '../assets/data.json';
import timestamps from '../assets/timeStamps.json';

// Components
import Dropdown from '../component/dropdown/Dropdown';
import HeaderTitle from '../component/header-title/HeaderTitle';
import Search from '../component/search/Search';
import List from '../component/list/List';

// Styles
import styles from './Dashboard.module.css';
import Card from '../component/card/Card';

const Dashboard = () => {
  const [currency, setCurrency] = useState('EUR');
  const [searchText, setSearchText] = useState('');
  const [selectedOrderDetails, setSelectedOrderDetails] = useState({});
  const [selectedOrderTimeStamps, setSelectedOrderTimeStamps] = useState({});
  const [combinedData, setCombinedData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  // Our drop down previously had hard coded currency. Now we can use any currency we want in our mockData and it will work
  const uniqueCurrencies = useMemo(() => {
    const currencies = [];
    mockData.results.forEach((item) => {
      Object.keys(item.bestExecutionData.orderVolume).forEach((key) => {
        if (!currencies.includes(key)) {
          currencies.push(key);
        }
      });
    });
    return currencies;
  }, []);

  // Combining and mapping mockdata and timestamps data based on the common '&id' field
  useEffect(() => {
    const combinedData = mockData.results.map((item1) => {
      const matchingTimestamp = timestamps.results.find(
        (item2) => item2['&id'] === item1['&id']
      );
      return { ...item1, timestamps: matchingTimestamp.timestamps };
    });

    setCombinedData(combinedData);
  }, []);

  useEffect(() => {
    const filteredData = combinedData.filter((item) =>
      item['&id'].toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredData(filteredData);
  }, [combinedData, searchText]);

  const handleRowClick = (row) => {
    setSelectedOrderDetails(row);
    setSelectedOrderTimeStamps(
      combinedData.find((item) => item['&id'] === row['&id'])
    );
  };

  return (
    <div>
      <div className={styles.header}>
        <HeaderTitle
          primaryTitle="Orders"
          secondaryTitle={mockData.results.length}
          // secondaryTitle={mockData.header.returnedHits}
        />
        <div className={styles.actionBox}>
          <Search
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Dropdown
            options={uniqueCurrencies}
            onChange={(e) => setCurrency(e.target.value)}
            selectedItem={currency}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <Card
            cardData={
              selectedOrderDetails && selectedOrderDetails.executionDetails
            }
            title="Selected Order Details"
          />
          <Card
            cardData={
              selectedOrderTimeStamps && selectedOrderTimeStamps.timestamps
            }
            title="Selected Order Timestamps"
          />
        </div>
        <List
          rows={filteredData}
          selectedCurrency={currency}
          handleClick={handleRowClick}
        />
      </div>
    </div>
  );
};

export default Dashboard;
