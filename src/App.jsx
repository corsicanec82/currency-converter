import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Settings from './features/Settings.jsx';
import ExchangeRates from './features/ExchangeRates.jsx';
import Converter from './features/Converter.jsx';
import { fetchCurrencies } from './features/data/dataSlice.js';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrencies());
  });

  return (
    <div className="d-flex flex-row p-3">
      <div className="flex-column">
        <div>
          <Settings />
        </div>
        <div className="mt-3">
          <Converter />
        </div>
      </div>
      <div className="ms-3">
        <ExchangeRates />
      </div>
    </div>
  );
};

export default App;
