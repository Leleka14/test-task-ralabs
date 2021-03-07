import React, { useCallback, useEffect, useState } from 'react';
import { Button, Row } from 'reactstrap';
import HeaderComponent from './HeaderComponent';
import ForecastComponent from './ForecastComponent';
import { Control, LocalForm } from 'react-redux-form';
import { connect } from 'react-redux';
import { fetchCurrentCity } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return{
        currentCity: state.CurrentCity.currentCity
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCurrentCity: () => dispatch(fetchCurrentCity())
})

const MainComponent = (props) => {

    const [currCity, setCurrCity] = useState(props.currentCity)



    useEffect(() => {
        props.fetchCurrentCity();
        
    }, [])

    const changeOnlyCurrentCity = useCallback(() => {
        setcity(props.currentCity)
      }, [props.currentCity]);
      
      useEffect(() => {
        changeOnlyCurrentCity(props.currentCity);
      }, [props.currentCity, changeOnlyCurrentCity]);
    const [city, setcity] = useState('');

    const submitInputHandler = (value) => {
        if(value.city !== ''){
            setcity(value.city)
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
            <ForecastComponent city={city}/>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);