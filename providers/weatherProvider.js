import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as ForecastThunkActions from "../store/thunks/forecast";
import { createContext, useContext, useEffect } from 'react';

export const WeatherProvider = ({ children }) => {
    // Redux state management
    const dispatch = useDispatch();
    const forecast = useSelector(state => state.forecast);

    // Component states
    const [info, setInfo] = useState(undefined);
    const [city, setCity] = useState('');
    const [date, setDate] = useState(new Date());

    const searchByCity = (city) => {
        dispatch(ForecastThunkActions.getForecastByCity({ city }));
    }

    const contextValue = {
        dispatch,
        city,
        setCity,
        info,
        setInfo,
        forecast,
        searchByCity,
        date,
        setDate
    };

    return (
        <WeatherContext.Provider value={contextValue}>
            {children}
        </WeatherContext.Provider>
    );
}

export const WeatherContext = createContext({});

export const useWeather = () => {
    const contextValue = useContext(WeatherContext);
    return contextValue;
}