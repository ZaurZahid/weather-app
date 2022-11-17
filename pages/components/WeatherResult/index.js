import React from 'react'
import { useWeather } from '../../../providers/weatherProvider';
import Modal from '../Modal';
import WeatherDetail from './WeatherDetail'
import styles from './detail-list.module.css'
import { getDay, getMonth } from '../../../utils';
import Loading from '../Loading';

function WeatherResult() {
    const { forecast, date } = useWeather();

    if (!forecast || !forecast.data) {
        return <Loading />;
    }

    if (forecast.loading || Object.keys(forecast.data).length === 0) {
        return <Loading />;
    }

    const { list: forecastList } = forecast.data;

    const sortForecastList = () => {
        let newArr = []
        forecastList.map(item =>
            `${getMonth(item.dt)} ${getDay(item.dt)}` === date.toString().slice(4, 10)
                ? newArr = [item, ...newArr]
                : newArr = [...newArr, item]
        )

        return newArr
    }

    const renderModalIfNeeded = () => {
        if (!forecast.error) {
            return;
        }

        return <Modal message={forecast.error} />
    };

    return (
        <div className={`flex flex-1 flex-col border ${styles['detail-list']}`}>
            {renderModalIfNeeded()}
            {forecastList && forecastList.length > 0 && sortForecastList().map(item => <WeatherDetail key={item.dt} data={item} />)}
        </div>
    )
}

export default WeatherResult