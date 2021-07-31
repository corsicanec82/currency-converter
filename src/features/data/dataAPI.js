import axios from 'axios';
import getUserCountry from 'js-user-country';
import countries from 'currency-code-map';

const apiUrl = 'https://www.floatrates.com/daily';

export const getRates = async (currency) => {
  const url = `${apiUrl}/${currency}.json`;
  const response = await axios.get(url);
 
  return Object.entries(response.data)
    .reduce((acc, [key, { code, rate }]) => ({
      ...acc, [code]: 1 / rate
    }), { [currency.toUpperCase()]: 1 });
};

export const getAvailableCurrencies = (rates) => (
  Object.keys(rates).slice().sort()
);

export const getUserCurrency = () => (
  countries[getUserCountry().id]
);
