import React, { useCallback, useEffect, useState } from 'react';
import { Button, Row } from 'reactstrap';
import HeaderComponent from './HeaderComponent';
import ForecastComponent from './ForecastComponent';
import { Control, LocalForm } from 'react-redux-form';
import { connect } from 'react-redux';
import { fetchCurrentCity } from '../redux/ActionCreators';

//function that passes state from store to props
const mapStateToProps = state => {
    return{
        currentCity: state.CurrentCity.currentCity
    }
}

//Function that allows us to call actions to form state 
const mapDispatchToProps = dispatch => ({
    fetchCurrentCity: () => dispatch(fetchCurrentCity())
})

const MainComponent = (props) => {

    const [city, setcity] = useState('');

    //Hook that executes only once after page is rendered to fetch Users, equivalent to componentDidMount
    useEffect(() => {
        props.fetchCurrentCity();
    }, [])

    //Function that helps us to know when only props.currentCity is changed but not all props
    const changeOnlyCurrentCity = useCallback(() => {
        setcity(props.currentCity)
    }, [props.currentCity]);
    
    useEffect(() => {
        changeOnlyCurrentCity(props.currentCity);
    }, [props.currentCity, changeOnlyCurrentCity]);

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