import React, { useEffect, useState } from 'react';
import { Button, Form, FormGroup, Input, Row } from 'reactstrap';
import HeaderComponent from './HeaderComponent';
import WeatherCardComponent from './WeatherCardComponent';
import { connect } from 'react-redux'
import { fetchWeather } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return{
        data: state.data
    }
}

const mapDispatchToProps = dispatch => ({
    fetchWeather: (city) => dispatch(fetchWeather(city))
})

const MainComponent = (props) => {

    const [city, setCity] = useState('');

    const [cityInput, setCityInput] = useState('');

    useEffect(() => {
        if(city !== ''){
            props.fetchWeather(city);
        }
    }, [city])

    

    const cityInputChangeHandler = event => {
        setCityInput(event.target.value)
    }

    const searchButtonClickHandler = (event) => {
        if(cityInput !== ''){
            setCity(cityInput);
            setCityInput('');
        }
        event.preventDefault();
    }

    // let city = 'London';
    // let APIkey = 'e672b55a6f5d42bf88dd75621777dcaf'
    // const loadData = () => {
    //     return fetch(`https://api.weatherbit.io/v2.0/current?city=${city}&key=${APIkey}`, {
    //         headers : { 
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         }
    //     })
    //     .then(response => {
    //         if(response.status === 200) return response.json()
    //     })
    //     .then(data => console.log(data))
    // }
    // loadData()

    return(
        <div className="container">
            <HeaderComponent/>
            <Form onSubmit={searchButtonClickHandler}>
                <Row>
                    <Input placeholder="Type city" onChange={cityInputChangeHandler} value={cityInput} className="col-10 col-md-4"/>
                    <Button type="submit" className="col-2 col-md-1" color="success"><i className="fa fa-lg fa-search"></i><sub>...</sub></Button>
                </Row>
            </Form>
            <WeatherCardComponent/>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);