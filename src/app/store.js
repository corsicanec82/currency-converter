import { configureStore } from '@reduxjs/toolkit';
// import currenciesReducer from '../features/currencies/currenciesSlice.js';
import settingsReducer from '../features/settings/settingsSlice.js';

export const store = configureStore({
  reducer: {
    // currencies: currenciesReducer,
    settings: settingsReducer,
  },
});
