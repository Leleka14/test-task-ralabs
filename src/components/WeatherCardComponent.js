import React from 'react';
import { Loading } from './LoadingComponent';

const WeatherCardComponent = (props) => {

    const RenderWeatherCard = () => {
        if(props.isLoading){
            return <Loading/>
        }

        if(props.weather !== null) {
            return(
                <div>Weather</div>
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