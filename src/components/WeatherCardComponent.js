import React from 'react';
import { Loading } from './LoadingComponent';
import { weatherIcon } from '../redux/baseUrl'

const WeatherCardComponent = (props) => {

    const RenderWeatherCard = () => {
        if(props.isLoading){
            return <Loading/>
        }

        if(props.weather !== null) {
            const imgSrc = `${weatherIcon}${props.weather.weather.icon}.png`
            return(
                <div className="card">
                    <img alt="Not Found" width="200px" src={imgSrc}/>
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