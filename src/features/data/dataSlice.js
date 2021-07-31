import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRates, getAvailableCurrencies, getUserCurrency } from './dataAPI.js';

const initialState = {
  baseCurrency: getUserCurrency(),
  rates: {},
  currenciesByName: [],
  fetchingStatus: 'loading',
};

export const fetchCurrencies = createAsyncThunk(
  'currencies/fetch',
  async (_, { getState }) => {
    const baseCurrency = getState().data.baseCurrency;
    const rates = await getRates(baseCurrency);
    const currencies = getAvailableCurrencies(rates);
    return { rates, currencies };
  },
);

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setBaseCurrency: (state, { payload }) => {
      state.baseCurrency = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrencies.pending, (state) => {
        state.fetchingStatus = 'loading';
        state.rates = {};
      })
      .addCase(fetchCurrencies.fulfilled, (state, { payload }) => {
        state.fetchingStatus = 'idle';
        state.currenciesByName = payload.currencies;
        state.rates = payload.rates;
      });
  },
});

export const selectFetchingStatus = ({ data }) => data.fetchingStatus;
export const selectBaseCurrency = ({ data }) => data.baseCurrency;
export const selectCurrencies = ({ data }) => data.currenciesByName;
export const selectRates = ({ data }) => data.rates;

const { reducer, actions } = dataSlice;

export const { setBaseCurrency } = actions;

export default reducer;
