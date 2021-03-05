import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Data } from './reducers/weatherData'

export const ConfigureStore = () => {
    const store = createStore(
        Data,
        applyMiddleware(thunk, logger)
    )
    return store;
}