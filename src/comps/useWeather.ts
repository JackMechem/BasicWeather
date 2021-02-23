import React, {useEffect, useState} from "react";

const useWeather = (city:string) => {

    const [weather, setWeather] = useState(null);
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=94219ab88ca9c0a2e0626c2db4014722"

    useEffect(() => {

        const effect = async () => {
            // await mean that the program waits untill it gives a resopnse.
            const response = await fetch(url); // first you fetch the url
            const data = await response.json(); // then you get the json output of the API
            const item = data; // So you can destructure
            setWeather(item); // Set the state varable.
        }
        effect();
    }, [city]);

    return{weather} // Return data
}

export default useWeather;