import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectBaseCurrency,
  selectFetchingStatus,
  selectCurrencies,
  fetchCurrencies,
  setBaseCurrency,
} from './data/dataSlice.js';

const Settings = () => {
  const baseCurrency = useSelector(selectBaseCurrency);
  const fetchingStatus = useSelector(selectFetchingStatus);
  const currencies = useSelector(selectCurrencies);
  const [currency, setCurrency] = useState(baseCurrency);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCurrency(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setBaseCurrency(currency));
    dispatch(fetchCurrencies());
  };

  return (
    <div className="toast show">
      <div className="toast-header">
        <strong className="me-auto">Settings</strong>
      </div>
      <div className="toast-body">
        <p>Current currency: {baseCurrency}</p>
        <form onSubmit={handleSubmit}>
          <select className="form-select" value={currency} onChange={handleChange}>
            {currencies.map((currency, id) => (
              <option key={id}>{currency}</option>
            ))}
          </select>
          <br />
          {fetchingStatus === 'loading'
            ? (
              <button className="btn btn-primary" type="submit" disabled>
                <span className="spinner-border spinner-border-sm me-1" />
                Loading...
              </button>
            )
            : (
                <button className="btn btn-primary" type="submit">Change base currency</button>
            )}
        </form>
      </div>
    </div>
  );
};

export default Settings;
