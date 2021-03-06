import * as ActionTypes from './ActionTypes';
import * as baseUrl from './baseUrl';

export const loadWeather = data => ({
    type: ActionTypes.LOAD_WEATHER,
    payload: data
})

export const weatherIsLoading = () => ({
    type: ActionTypes.WEATHER_ISLOADING
})

export const weatherFailed = error => ({
    type: ActionTypes.WEATHER_FAILED,
    payload: error
})

export const fetchWeather = (city) => dispatch => {
    dispatch(weatherIsLoading(true));
    return fetch(`${baseUrl.weatherAPI}?city=${city}&key=${baseUrl.weatherAPIKey}`)
        .then(response => {
            if(response.ok) return response.json();
            else{
                var error = new Error('Error' + response.status + ': '+ response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errorMessage = new Error(error.errorMessage);
            throw errorMessage;
        })
        .then(data => {
            dispatch(loadWeather(data))
        })
        .catch(err => dispatch(weatherFailed(err.errorMessage)))
}