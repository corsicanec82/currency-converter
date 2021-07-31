import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import {
//   fetchRates,
// } from './data/dataSlice.js';

const ExchangeRates = () => {
  // const currentCurrency = useSelector(getCurrentCurrency);
  // const currencies = useSelector(getCurrencies);
  const dispatch = useDispatch();
  // const [currency, setCurrency] = useState(currentCurrency);

  // const handleChange = (e) => {
  //   setCurrency(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('test');
    // dispatch(fetchRates());
  };

  return (
    <div className="toast show">
      <div className="toast-header">
        <strong className="me-auto">Exchange rates</strong>
      </div>
      <div className="toast-body">
        <p>Rates</p>
        <form onSubmit={handleSubmit}>
          <button className="btn btn-primary" type="submit">Test</button>
        </form>
      </div>
    </div>
  );
};

export default ExchangeRates;
