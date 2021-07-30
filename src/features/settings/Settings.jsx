import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getCurrentCurrency, setCurrentCurrency, getCurrencies
} from './settingsSlice.js';

const Settings = () => {
  const currentCurrency = useSelector(getCurrentCurrency);
  const currencies = useSelector(getCurrencies);
  const dispatch = useDispatch();
  const [currency, setCurrency] = useState(currentCurrency);

  const handleChange = (e) => {
    setCurrency(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setCurrentCurrency(currency));
  };

  return (
    <div className="toast show">
      <div className="toast-header">
        <strong className="me-auto">Settings</strong>
      </div>
      <div className="toast-body">
        <p>Current currency: {currentCurrency}</p>
        <form onSubmit={handleSubmit}>
          <select className="form-select" value={currency} onChange={handleChange}>
            {currencies.map((currency, id) => (
              <option key={id}>{currency}</option>
            ))}
          </select>
          <br />
          <button className="btn btn-primary" type="submit">Change current currency</button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
