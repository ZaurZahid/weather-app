import React from 'react'
import moment from 'moment'
import { Calendar as CalendarBase } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useWeather } from '../../../providers/weatherProvider';

function Calendar() {
    const { date, setDate } = useWeather()
    const yesterday = moment().subtract(1, 'day');
    const disablePastDt = current => {
        return current.isAfter(yesterday);
    };

    return (
        <div className='ml-6'>
            <CalendarBase
                onChange={setDate}
                value={date}
                minDate={moment().toDate()}
                maxDate={moment().add('days', 5).toDate()}
            />
        </div>
    )
}

export default Calendar