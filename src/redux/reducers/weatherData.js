import * as ActionTypes from '../ActionTypes';

export const data = (state = {
        isLoading: false,
        errorMessage: null,
        weather: null
    }, action) => {
    switch(action.type){
        case ActionTypes.LOAD_WEATHER:
            return {...state, isLoading: false, errorMessage: null, weather: action.payload}
        case ActionTypes.WEATHER_ISLOADING:
            return {...state, isLoading: true, errorMessage: null, weather: null};
        case ActionTypes.WEATHER_FAILED:
            return {...state, isLoading: false, errorMessage: action.payload, weather: null}
        default:
            return state;
    }
}