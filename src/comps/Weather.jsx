import useWeather from './useWeather'
import './comp.css'
import SetWeather from './SetWeather.jsx'
import React, {useEffect, useState} from "react";

const Weather = (props) => {

    var cityInput = "";

    const [city, setCity] = useState("Las Vegas");

    let ChangeCity = (_city) => {
        cityInput = _city;
    }
    

    return(<div className="weather">

         <input onChange={event => ChangeCity(event.target.value)}></input>
        <button onClick={() => setCity(cityInput)}>OK</button>
        {SetWeather(city)}
        
    </div>)
    
}

export default Weather;