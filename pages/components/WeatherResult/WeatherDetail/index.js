import React from 'react'
import styles from './weather-detail.module.css'
import {
    convertKelvinToFahrenheit,
    getDay,
    getHour,
    getMonth,
    getWeatherIcon,
    isToday,
    selectedDateIsToday
} from "../../../../utils/index";
import { useWeather } from '../../../../providers/weatherProvider';

function WeatherDetail({ data }) {
    if (!data) {
        return null;
    }

    const { dt, clouds, main, weather, wind } = data;
    const { date } = useWeather()

    if (!isToday(dt) && selectedDateIsToday(date)) return null

    return (
        <div className={`flex w-full border-b py-4 ${isToday(dt) && styles['today-active']}`}>
            {!!isToday(dt) && <div className={styles['today-badge']}>Today</div>}
            <div className={styles['card-icon']}>
                <img className="icon" src={getWeatherIcon(weather[0].icon)} alt="weather icon" />
            </div>
            <div className={`pl-5 ${styles['card-info']}`}>
                <div className={`text-4xl ${styles['temperature']}`}>
                    {convertKelvinToFahrenheit(main.temp)}º
                </div>
                <div className={styles['more-info']}>
                    <p>{getMonth(dt)} {getDay(dt)} / {getHour(dt)}</p>
                    <p>Clouds | {clouds.all}%</p>
                    <p>Wind | {wind.speed}</p>
                    <p>Humidity | {main.humidity}</p>
                    <p>{weather[0].description}</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherDetail
