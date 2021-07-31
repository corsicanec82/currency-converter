import React from 'react';
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
            <ul className="list-group list-group-flush">
              {Object.entries(rates).map(([currency, rate], id) => (
                <li className="list-group-item" key={id}>1 {currency} = {rate.toFixed(4)} {baseCurrency}</li>
              ))}
            </ul>
          )}
      </div>
    </div>
  );
};

export default ExchangeRates;
