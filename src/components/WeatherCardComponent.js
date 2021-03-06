import React from 'react';
import { Loading } from './LoadingComponent';
import { weatherIcon } from '../redux/baseUrl';
import { Row } from 'reactstrap';

const WeatherCardComponent = (props) => {
    console.log(props)
    const RenderWeatherCard = () => {
        if(props.isLoading){
            return <Loading/>
        }

        if(props.weather) {
            const imgSrc = `${weatherIcon}${props.weather.weather.icon}.png`
            return(
                <div className="weather-card-wrapper">
                    <h4>Weather in {props.weather.city_name} for {props.weather.ob_time}</h4>
                    <div className="weather-card">
                        <div className="weather-card-main">
                            <Row>
                                <div className="col-sm-4 ">
                                    <img className="weather-card-main-image" alt="Not Found" width="100px" src={imgSrc}/>
                                </div>
                                <div className="weather-card-main-info col-sm-4">
                                    <h6>Temperature: {props.weather.temp}°C</h6>
                                </div>
                            </Row>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div>Not</div>
            )
        }
    }

    return(
        <RenderWeatherCard/>
    )
}

export default WeatherCardComponent;