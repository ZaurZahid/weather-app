export const getDay = date => new Date(date * 1000).getDate();

export const getHour = date => (new Date(date * 1000).toLocaleTimeString("en-US"));

export const getMonth = date => {
    return new Date(date * 1000).toLocaleString('default', { month: 'short' });
}

export const convertKelvinToFahrenheit = k => {
    return Math.trunc(((k - 273.15) * 1.8) + 32);
}

export const isToday = date => {
    const today = new Date().getDate();
    return getDay(date) === today
}

export const selectedDateIsToday = date => {
    return new Date().toString().slice(4, 15) === date.toString().slice(4, 15)
}

export const getWeatherIcon = icon => {
    return `https://openweathermap.org/img/wn/${icon}@2x.png`;
}