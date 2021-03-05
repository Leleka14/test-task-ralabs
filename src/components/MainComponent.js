import React, { useState } from 'react';
import { Button, Input, Row } from 'reactstrap';
import HeaderComponent from './HeaderComponent';
import WeatherCardComponent from './WeatherCardComponent';

const MainComponent = () => {

    const [cityInput, setCityInput] = useState('');

    const cityInputChangeHandler = event => {
        setCityInput(event.target.value)
    }

    const searchButtonClickHandler = e => {
        if(cityInput !== ''){
            setCityInput('');

        }
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
            <Row>
                <Input placeholder="Type city" onChange={cityInputChangeHandler} value={cityInput} className="col-10 col-md-4"/>
                <Button onClick={searchButtonClickHandler} className="col-2 col-md-1" color="success"><i className="fa fa-lg fa-search"></i><sub>...</sub></Button>
            </Row>
            <WeatherCardComponent/>
        </div>
    )
}

export default MainComponent;