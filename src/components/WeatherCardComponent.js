import React from 'react';
import { Loading } from './LoadingComponent';
import { weatherIcon } from '../redux/baseUrl';
import { Row } from 'reactstrap';

const WeatherCardComponent = (props) => {

    const createDescription = (temp, rain, clouds, wind) => {
        let text = '';
        let arrayForHotWeather = [
            "You should wear something light as it will be warm, more than 15°.", 
            "If i was you, i would wear shorts as it would be warm.",
            "Don't wear anything with longsleeves, it will be warm."
        ];
        let arrayForCoolWeather = [
            "It would be cool weather.",
            "Temperature wouldn't be too low, but wouldn't be too high either, be careful.",
            "In my opinion this would be perfect temperature, not high, not low."
        ];
        let arrayForColdWeather = [
            "I recommend you to wear coat, temparature would be less than 10°.",
            "Be careful, it seems like it's still cool weather, but it's not.",
            "It's easy to catch a cold, you should put on something warm."
        ];
        let arrayForNoRain = [
            "No rain at all.",
            "Gods of rain told me that they would be merciful this day.",
            "Nothing will fall from sky, unless some bird will be flying over you."
        ];
        let arrayForSmallProbRain = [
            "It shouldn't be raining, but there is a small chance.",
            "You should look at the sky from time to time, small chance of rain.",
            "There is a small probability if rain."
        ]
        let arrayForRain = [
            "You really should take an umbrella, it would be raining.",
            "There is a high chance of rain.",
            "Don't plan anything outside, it would be raining."
        ];
        let arrayForClearSky = [
            "Sky would be clear."
        ];
        let arrayForClouds = [
            "It will cloudy."
        ];
        let arrayForHalfClouds = [
            "Half of sky will be in clouds."
        ]
        let arrayForWeakWind = [
            "Wind will be weak."
        ];
        let arrayForPowerWind = [
            "It also will be windy."
        ];
        if(temp >= 18) text += `${arrayForHotWeather[Math.floor(Math.random() * (3))]}`
        if(temp >= 10 && temp < 18) text += ` ${arrayForCoolWeather[Math.floor(Math.random() * (3))]}`
        if(temp < 10) text += ` ${arrayForColdWeather[Math.floor(Math.random() * (3))]}`
        if(rain < 10) text += ` ${arrayForNoRain[Math.floor(Math.random() * (3))]}`
        if(rain >= 10 && rain < 50) text += ` ${arrayForSmallProbRain[Math.floor(Math.random() * (3))]}`
        if(rain >= 50) text += ` ${arrayForRain[Math.floor(Math.random() * (3))]}`
        if(clouds >= 70) text += ` ${arrayForClouds[0]}`
        if(clouds < 70 && clouds >= 30) text += ` ${arrayForHalfClouds[0]}`
        if(clouds < 30) text += ` ${arrayForClearSky[0]}`
        if(wind >= 5) text += ` ${arrayForPowerWind[0]}`
        if(wind < 5) text += ` ${arrayForWeakWind[0]}`
        return text;
    };

    const imgSrc = `${weatherIcon}${props.weather.weather.icon}.png`;
    return(
        <div className="col-md-6 weather-card-wrapper">
            <h4>Weather in {props.city} for {`${new Date(props.date).getDate()} ${new Intl.DateTimeFormat('en-US', {month: "long"}).format(new Date(props.date))}`}</h4>
            <div className="weather-card container">
                <div className="weather-card-main">
                    <Row>
                        <div className="col-sm-4 weather-card-main-image-wrapper">
                            <img className="weather-card-main-image" alt="Not Found" width="100px" src={imgSrc}/>
                        </div>
                        <div className="weather-card-main-info col-sm-7">
                            <p>Average Temperature: {props.weather.temp}°C</p>
                            <p>Probability of Precipitation: {props.weather.pop}%</p>
                            <p>Wind speed: {Math.round(props.weather.wind_spd)}m/s</p>
                            <p>Humidity: {props.weather.rh}%</p>
                        </div>
                    </Row>
                    <p>{createDescription(props.weather.temp, props.weather.pop, props.weather.clouds, props.weather.wind_spd)}</p>
                </div>
            </div>
        </div>
    )
            
}

export default WeatherCardComponent;