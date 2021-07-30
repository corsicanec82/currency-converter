import { createSlice } from '@reduxjs/toolkit';
import getUserCountry from 'js-user-country';
import countries from 'currency-code-map';

const initialState = {
  currentCurrency: countries[getUserCountry().id],
  currencies: Object.values(countries)
    .filter((currency) => currency),
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setCurrentCurrency: (state, { payload }) => {
      state.currentCurrency = payload;
    },
  },
});

export const getCurrentCurrency = (state) => (
  state.settings.currentCurrency
);

export const getCurrencies = (state) => (
  state.settings.currencies
);

const { reducer, actions } = settingsSlice;

export const { setCurrentCurrency } = actions;

export default reducer;
