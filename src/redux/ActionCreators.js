
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
    console.log(city)
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

export const loadCurrentCity = data => ({
    type: ActionTypes.LOAD_CURRENT_CITY,
    payload: data
})

export const fetchCurrentCity = () => dispatch => {
    
    const getGeo = (position) => {
        return fetch(`http://api.positionstack.com/v1/reverse?access_key=29503943e43100352ab460a761bd9a9c&query=${position.coords.latitude},${position.coords.longitude}`)
        .then(response => response.json())
        .then(data => {
            dispatch(loadCurrentCity(data))
        })
    }

    navigator.geolocation.getCurrentPosition(getGeo, console.log);
}