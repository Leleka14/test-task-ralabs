import React, { useState } from 'react';
import { Button, Row } from 'reactstrap';
import HeaderComponent from './HeaderComponent';
import WeatherCardComponent from './WeatherCardComponent';
import ForecastComponent from './ForecastComponent';
import { connect } from 'react-redux'
import { fetchWeather } from '../redux/ActionCreators';
import { Control, LocalForm } from 'react-redux-form';

const mapStateToProps = state => {
    return{
        data: state
    }
}

const mapDispatchToProps = dispatch => ({
    fetchWeather: (city) => dispatch(fetchWeather(city))
})

const MainComponent = (props) => {
    let currentLocation = {};
    
    const getGeo = (position) => {
        currentLocation.latitude = position.coords.latitude;
        currentLocation.longitude = position.coords.longitude;
    }

    navigator.geolocation.getCurrentPosition(getGeo, console.log);

    const [city, setcity] = useState();

    const [selectedCard, setselectedCard] = useState(null);

    const selectCardHandler = (id) => {
        setselectedCard(props.data.weather.data[id])
    }

    const submitInputHandler = (value) => {
        if(value !== ''){

            props.fetchWeather(value.city);
        }
    }

    return(
        <div className="container">
            <HeaderComponent/>
            <LocalForm onSubmit={value => submitInputHandler(value)}>
                <Row className="form-group">
                    <Control.text placeholder="Type city" className="col-10 col-md-4 form-control" model=".city"/>
                    <Button type="submit" className="col-2 col-md-1" color="success"><i className="fa fa-lg fa-search"></i><sub>...</sub></Button>
                </Row>
            </LocalForm>
            <ForecastComponent weatherArray={props.data.weather} chooseCard={(id) => selectCardHandler(id)}/>
            <WeatherCardComponent isLoading={props.data.isLoading} weather={selectedCard}/>
        </div>
    )
}

export default (connect(mapStateToProps, mapDispatchToProps)(MainComponent));