import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { data } from './reducers/weatherData'

export const ConfigureStore = () => {
    const store = createStore(
        data,
        applyMiddleware(thunk, logger)
    )
    return store;
}