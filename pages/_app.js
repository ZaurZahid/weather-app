import '../styles/globals.css'
import { Provider } from "react-redux";
import { store } from '../store/index';
import { WeatherProvider } from '../providers/weatherProvider';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <WeatherProvider>
        <Component {...pageProps} />
      </WeatherProvider>
    </Provider>
  )
}

export default MyApp;