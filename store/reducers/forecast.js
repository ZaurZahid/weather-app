import { createSlice } from '@reduxjs/toolkit'
import { getForecastByCity } from '../thunks/forecast'

const initialState = {
    loading: false,
    error: undefined,
    data: {}
}

export const forecastSlice = createSlice({
    name: 'forecast',
    initialState,
    reducers: {},
    extraReducers: {
        [getForecastByCity.pending]: (state) => {
            state.loading = true;
        },
        [getForecastByCity.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.data = payload;
            state.error = payload.list.length > 0 ? undefined : 'There is no data'
        },
        [getForecastByCity.rejected]: (state, { payload }) => {
            const { message } = payload;
            state.error = message;
            state.loading = false;
        }
    }
})

export default forecastSlice.reducer;