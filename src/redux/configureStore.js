import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Data } from './reducers/weatherData'
import { CurrentCity } from './reducers/currentCity';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            Data, 
            CurrentCity
        }), 
        applyMiddleware(thunk, logger)
    )
    return store;
}