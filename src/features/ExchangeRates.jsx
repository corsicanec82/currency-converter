import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectFetchingStatus,
  selectRates,
  selectBaseCurrency,
} from './data/dataSlice.js';
import Loading from './Loading.jsx';

const ExchangeRates = () => {
  const baseCurrency = useSelector(selectBaseCurrency);
  const fetchingStatus = useSelector(selectFetchingStatus);
  const rates = useSelector(selectRates);
  const [filterText, setFilterText] = useState('');

  const handleChange = (e) => {
    setFilterText(e.target.value);
  };

  return (
    <div className="toast show">
      <div className="toast-header">
        <strong className="me-auto">Exchange rates</strong>
      </div>
      <div className="toast-body">
        {fetchingStatus === 'loading'
          ? (
            <Loading />
          )
          : (
            <>
              <form>
                <div className="mb-2">
                  <label for="filterRate" className="form-label">Filter rate:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="filterRate"
                    value={filterText}
                    onChange={handleChange}
                  />
                </div>
              </form>
              <ul className="list-group list-group-flush">
                {Object.entries(rates)
                  .filter(([currency]) => currency.includes(filterText.toUpperCase()))
                  .map(([currency, rate], id) => (
                    <li className="list-group-item" key={id}>1 {currency} = {rate.toFixed(4)} {baseCurrency}</li>
                  ))}
              </ul>
            </>
          )}
      </div>
    </div>
  );
};

export default ExchangeRates;
