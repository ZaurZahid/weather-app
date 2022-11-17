import Head from 'next/head'
import { useEffect } from 'react'
import { useWeather } from '../providers/weatherProvider'
import styles from '../styles/Home.module.css'
import Calendar from './components/Calendar'
import WeatherResult from './components/WeatherResult'

export default function Home() {
  const majorCities = ['New York', 'London', 'Berlin', 'Paris', 'Tokyo']
  const { city: cityName, setCity, searchByCity } = useWeather();

  const handleCity = (cityName) => {
    setCity(cityName)
    searchByCity(cityName)
  }

  return (
    <div>
      <Head>
        <title>Weather app</title>
        <meta name="description" content="Weather app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto p-4">
        <h1 className={`text-6xl font-bold ${styles['app-name']}`}>
          Weather App
        </h1>

        <div className={`mt-4 flex ${styles['cities']}`}>
          {majorCities.map((city, index) =>
            <div key={index} className={`px-6 py-2 cursor-pointer ${styles['city']} ${cityName === city && styles['active-city']}`} onClick={() => handleCity(city)}>
              {city}
            </div>
          )}
        </div>

        <div className={`flex justify-between py-3`}>
          {!cityName
            ? <p>Please select one of the city on the top</p>
            : <>
              <WeatherResult />
              <Calendar />
            </>}
        </div>
      </main>
    </div>
  )
}
