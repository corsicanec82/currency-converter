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
    <div>
      <h2>Settings</h2>
      current currency: {currentCurrency}
      <br />
      <form onSubmit={handleSubmit}>
        <select value={currency} onChange={handleChange}>
          {currencies.map((currency, id) => (
            <option key={id}>{currency}</option>
          ))}
        </select>
        <br />
        <input type="submit" value="Change current currency" />
      </form>
    </div>
  );
};

export default Settings;
