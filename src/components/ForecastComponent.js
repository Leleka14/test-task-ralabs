import React, { useEffect, useState } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { Row } from 'reactstrap';
import { weatherIcon } from '../redux/baseUrl';
import { connect } from 'react-redux'
import { fetchWeather } from '../redux/ActionCreators';
import WeatherCardComponent from './WeatherCardComponent';
import { Loading } from './LoadingComponent';

//function that passes state from store to props
const mapStateToProps = state => {
    return{
        twoWeekWeather: state.Data
    }
}

//Function that allows us to call actions to form state 
const mapDispatchToProps = dispatch => ({
    fetchWeather: (city) => dispatch(fetchWeather(city))
})


const Arrow = ({ text, className }) => {
    return (
        <div className={className}>{text}</div>
    );
};    
 
const ForecastComponent = props => {

    const [currentCard, setCurrentCard] = useState(0);

    //Hook that executes when props.city is changed
    useEffect(() => {
        if(props.city) props.fetchWeather(props.city)
    }, [props.city]);

    const createFormatedDate = date => {
        const newDate = new Date(date)
        const formatDate = `${newDate.getDate()} ${new Intl.DateTimeFormat('en-US', {month: "long"}).format(newDate)}`
        return formatDate;
    }

    const RenderList = () => {
        if(props.twoWeekWeather.isLoading){
            return <Loading/>
        }

        //Renders weather if it exists
        if(props.twoWeekWeather.weather){
            const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
            const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

            //Maps through weather array
            const cards = props.twoWeekWeather.weather.data.map((el, id) => {
                const imgSrc = `${weatherIcon}${el.weather.icon}.png`;
                
                return (
                    <li onClick={() => setCurrentCard(id)} className="menu-item weather-list-element" key={el.datetime}>
                        <p>{createFormatedDate(el.datetime)}</p>
                        <img alt="Not Found" width="45px" height="30px" src={imgSrc}/>
                        <Row>
                            <p className="offset-1 col-4"><small>min:</small><br/>{el.min_temp}°</p>
                            <p className="offset-1 col-4"><small>max:</small><br/>{el.max_temp}°</p>
                        </Row>
                    </li>
                )
            });
            return(
                <React.Fragment>
                    <h2>Weather at {props.twoWeekWeather.weather.city_name}, {createFormatedDate(props.twoWeekWeather.weather.data[0].datetime)} - {createFormatedDate(props.twoWeekWeather.weather.data[props.twoWeekWeather.weather.data.length - 1].datetime)}</h2>
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
            return <div></div>
        }
    }

    const RenderDetailedWeather = () => {
        if(props.twoWeekWeather.weather){
            return(
                <WeatherCardComponent city={props.twoWeekWeather.weather.city_name} date={props.twoWeekWeather.weather.data[currentCard].datetime} weather={props.twoWeekWeather.weather.data[currentCard]}/>
            )
        }
        else{
            return <div></div>
        }
    }

    return(
        <div>
            <RenderList/>
            <RenderDetailedWeather/>
        </div>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(ForecastComponent);