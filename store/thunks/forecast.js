import { createAsyncThunk } from "@reduxjs/toolkit";
import * as ForecastAPI from '../api/forecast';

export const getForecastByCity = createAsyncThunk('forecast/getForecastByCity', async ({ city }, { rejectWithValue }) => {
    try {
        return await ForecastAPI.getForecastByCity(city);
    } catch (e) {
        return rejectWithValue(e);
    }
});