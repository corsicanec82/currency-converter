import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import cn from 'classnames';
import {
  selectFetchingStatus,
  selectRates,
  selectBaseCurrency,
} from './data/dataSlice.js';

const Converter = () => {
  const baseCurrency = useSelector(selectBaseCurrency);
  const fetchingStatus = useSelector(selectFetchingStatus);
  const rates = useSelector(selectRates);
  const [convertText, setConvertText] = useState('');
  const [convertResult, setConvertResult] = useState('');
  const [convertTextError, setConvertTextError] = useState('');

  const handleChange = (e) => {
    setConvertText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const matches = convertText.match(/^(\d+)\s+in\s+([a-z]{3})$/i) ?? [];
    const [, value, currency] = matches;
    if (!value || !currency) {
      setConvertTextError('wrong format');
      return;
    }
    const currencyCode = currency.toUpperCase();
    const rate = rates[currencyCode];
    if (!rate) {
      setConvertTextError('wrong currency');
      return;
    }
    const convertedValue = (value / rate).toFixed(2);
    const result = `${value} ${baseCurrency} = ${convertedValue} ${currencyCode}`;
    setConvertText('');
    setConvertTextError('');
    setConvertResult(result);
  };

  return (
    <div className="toast show">
      <div className="toast-header">
        <strong className="me-auto">Converter</strong>
      </div>
      <div className="toast-body">
        <form className="mb-4" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="convertText" className="form-label">
              Enter the base currency value and the conversion currency.
              <br/>
              For example: 150 in eur
            </label>
            <input
              type="text"
              className={
                cn('form-control', { 'is-invalid': convertTextError !== '' })
              }
              id="convertText"
              value={convertText}
              onChange={handleChange}
              disabled={fetchingStatus === 'loading'}
            />
            <div className="invalid-feedback">
              {convertTextError}
            </div>
          </div>
          <button className="btn btn-primary" type="submit">Convert</button>
        </form>
        <p className="fs-6">Result: {convertResult}</p>
      </div>
    </div>
  );
};

export default Converter;
