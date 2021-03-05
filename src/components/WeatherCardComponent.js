import React from 'react'

const WeatherCardComponent = (props) => {

    const RenderWeatherCard = () => {
        if(props.data !== null) {
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