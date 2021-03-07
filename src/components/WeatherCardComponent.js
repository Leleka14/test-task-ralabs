import React from 'react';
import { Loading } from './LoadingComponent';
import { weatherIcon } from '../redux/baseUrl';
import { Row } from 'reactstrap';

const WeatherCardComponent = (props) => {

    const generateDescription = () => {
        let text = '';
        
    }

    const imgSrc = `${weatherIcon}${props.weather.weather.icon}.png`;
    return(
        <div className="col-md-6 weather-card-wrapper">
            <h4>Weather in {props.city} for {`${new Date(props.date).getDate()} ${new Intl.DateTimeFormat('en-US', {month: "long"}).format(new Date(props.date))}`}</h4>
            <div className="weather-card">
                <div className="weather-card-main">
                    <Row>
                        <div className="col-sm-4 weather-card-main-image-wrapper">
                            <img className="weather-card-main-image" alt="Not Found" width="100px" src={imgSrc}/>
                        </div>
                        <div className="weather-card-main-info col-sm-7">
                            <p>Average Temperature: {props.weather.temp}°C</p>
                            <p>Probability of Precipitation: {props.weather.pop}%</p>
                            <p>Wind speed: {Math.round(props.weather.wind_spd)}m/s</p>
                        </div>
                    </Row>
                    <p></p>
                </div>
            </div>
        </div>
    )
            
}

export default WeatherCardComponent;