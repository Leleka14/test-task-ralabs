import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Row } from 'reactstrap';
import HeaderComponent from './HeaderComponent';
import WeatherCardComponent from './WeatherCardComponent';
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

    const submitInputHandler = (value) => {
        if(value !== ''){
            props.fetchWeather(value.city)
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
            <WeatherCardComponent isLoading={props.data.isLoading} weather={props.data.weather}/>
        </div>
    )
}

export default (connect(mapStateToProps, mapDispatchToProps)(MainComponent));