import { configureStore } from '@reduxjs/toolkit';
import forecastReducer from './reducers/forecast';

export const store = configureStore({
    reducer: {
        forecast: forecastReducer,
    },
});