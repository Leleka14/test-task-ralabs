import * as ActionTypes from '../ActionTypes';

export const CurrentCity = (state = {
        currentCity: null
    }, action) => {
    switch(action.type){
        case ActionTypes.LOAD_CURRENT_CITY:
            return {currentCity: action.payload.data[0].region}
        default:
            return state;
    }
}