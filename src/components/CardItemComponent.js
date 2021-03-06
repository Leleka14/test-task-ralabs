import React from 'react'
import { Row } from 'reactstrap'
import { weatherIcon } from '../redux/baseUrl';

const CardItemComponent = (props) => {
    console.log(props)
    const imgSrc = `${weatherIcon}${props.data.weather.icon}.png`;
    return(
        <div className={`menu-item weather-list-element`} key={props.data.ts}>
            <p>{props.data.datetime}</p>
            <img alt="Not Found" width="45px" height="30px" src={imgSrc}/>
            <Row>
                <p className="offset-1 col-4"><small>min:</small><br/>{props.data.app_min_temp}°</p>
                <p className="offset-1 col-4"><small>max:</small><br/>{props.data.app_max_temp}°</p>
            </Row>
        </div>
    )
}

export default CardItemComponent;