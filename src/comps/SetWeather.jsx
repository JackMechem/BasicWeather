import React from 'react';
import useWeather from './useWeather'

const SetWeather  = (city) => {
    
    const {weather} = useWeather(city);
    if(city) {
        return(<div>
        {!weather ? (<h3>loading...</h3>) : ( // null check
        <div>
        <br/>
        <h1>{city}</h1> 
        <h2>{weather.weather[0].main}</h2>
        <h3>{weather.weather[0].description}</h3>
        <h1>Feels Like: {weather.main.feels_like}°</h1>
        <h2>Actually: {weather.main.temp}</h2>
        <h3>L:{weather.main.temp_min}° H:{weather.main.temp_max}°</h3>
        <br></br>
        </div>)}
    </div>)
    } else {
        return;
    }
     


}

export default SetWeather;