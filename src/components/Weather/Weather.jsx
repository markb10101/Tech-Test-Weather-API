import React, { useState, useEffect } from 'react';
import styles from "./Weather.module.scss";
import WeatherCard from "../WeatherCard";

const Weather = () => {

  const cityId = "2643744";

  const myApiKey = "4b162341f3587ae4fbd41f27e1814695";

  const [weatherData, setWeatherData] = useState({});

  const getApiData = async () => {

    let urlString = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=metric&appid=${myApiKey}`;

    await fetch(urlString)
      .then(response => response.json())
      .then(data => {
        
        setWeatherData(data);
      })

      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getApiData();
  },[])

  // useEffect(()=> {

  // },[weatherData])

  return (
    <>
    
    <WeatherCard weatherData={weatherData} />

    </>
  );
};

export default Weather;
