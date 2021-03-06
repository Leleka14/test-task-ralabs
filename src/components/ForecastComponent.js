import React, { useState } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { Row } from 'reactstrap';
import { weatherIcon } from '../redux/baseUrl';
import WeatherCardComponent from './WeatherCardComponent';

const Arrow = ({ text, className }) => {
    return (
        <div className={className}>{text}</div>
    );
};    
 
const ForecastComponent = (props) => {

    const RenderWeatherList = () => {
        if(props.weatherArray){
            const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
            const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });
            const cards = props.weatherArray.data.map((el, id) => {
                const imgSrc = `${weatherIcon}${el.weather.icon}.png`;
                console.log(id)
                return (
                    <li onClick={() => props.chooseCard(id)} className="menu-item weather-list-element" key={el.ts}>
                        <p>{el.datetime}</p>
                        <img alt="Not Found" width="45px" height="30px" src={imgSrc}/>
                        <Row>
                            <p className="offset-1 col-4"><small>min:</small><br/>{el.app_min_temp}°</p>
                            <p className="offset-1 col-4"><small>max:</small><br/>{el.app_max_temp}°</p>
                        </Row>
                    </li>
                )
            });
            
            return(
                <React.Fragment>
                    <h2>Weather at {props.weatherArray.city_name}, {props.weatherArray.data[0].datetime} - {props.weatherArray.data[props.weatherArray.data.length - 1].datetime}</h2>
                    <ScrollMenu
                        data={cards}
                        arrowLeft={ArrowLeft}
                        arrowRight={ArrowRight}
                        wheel={false}
                        scrollBy={3}
                        translate={1}
                    />
                </React.Fragment>
            )
        }
        else{
            return<div></div>
        }
    }

    return(
        <React.Fragment>
            <RenderWeatherList/>
        </React.Fragment>
        
    )
}

export default ForecastComponent;