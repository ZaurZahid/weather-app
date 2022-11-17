import { fetchData } from "./common";
import { BASE_URL_WEATHER } from "../../utils/constants";

export const getForecastByCity = async (city_) => {
    const baseUrl = BASE_URL_WEATHER + "/forecast";;
    const params = `q=${city_}`;
    return await fetchData(baseUrl, params);
};