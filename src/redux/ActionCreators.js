import * as ActionTypes from './ActionTypes';
import * as baseUrl from './baseUrl';

export const loadWeather = data => ({
    type: ActionTypes.LOAD_WEATHER,
    payload: data
})

export const weatherIsLoading = () => ({
    type: ActionTypes.LOAD_WEATHER
})

export const weatherFailed = error => ({
    type: ActionTypes.WEATHER_FAILED,
    payload: error
})

export const fetchWeather = (city) => dispatch => {
    dispatch(weatherIsLoading())
    return fetch(`${baseUrl.weatherAPI}?city=${city}&key=${baseUrl.weatherAPIKey}`)
        .then(response => {
            if(response.status === 200)
        })
}