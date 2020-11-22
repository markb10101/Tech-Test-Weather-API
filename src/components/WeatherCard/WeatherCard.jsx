import React, { useState, useEffect } from 'react';
import styles from "./WeatherCard.module.scss";

const WeatherCard = (props) => {

  const cityId = props.cityId;
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

  const cityNameJSX = () => {
    return weatherData.name !== undefined ? (
     <span>{weatherData.name}</span>
    ) : (
      <span>Loading</span>
    )
  }

  const cityTempJSX = () => {
    return weatherData.main !== undefined ? (
     <span>{weatherData.main.temp}</span>
    ) : (
      <span>Loading</span>
    )
  }

  const cityTempMinJSX = () => {
    return weatherData.main !== undefined ? (
     <span>{weatherData.main.temp_min}</span>
    ) : (
      <span>Loading</span>
    )
  }

  const cityTempMaxJSX = () => {
    return weatherData.main !== undefined ? (
     <span>{weatherData.main.temp_max}</span>
    ) : (
      <span>Loading</span>
    )
  }
 
  const cityHumidityJSX = () => {
    return weatherData.main !== undefined ? (
     <span>{weatherData.main.humidity}</span>
    ) : (
      <span>Loading</span>
    )
  }


  return (
    <div className={styles.card}>
      <p>City: {weatherData.name}</p>
      <p>Temp: {cityTempJSX()}&deg;C</p>
      <p>(Min. {cityTempMinJSX()}&deg;C Max. {cityTempMaxJSX()}&deg;C)</p>
      <p>Humidity: {cityHumidityJSX()}</p>
    </div>
  );
};

export default WeatherCard;
