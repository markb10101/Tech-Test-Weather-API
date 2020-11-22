import React, { useState, useEffect } from 'react';
import styles from "./WeatherCard.module.scss";

const WeatherCard = (props) => {

  const weatherData = props.weatherData;

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
    <>
      <p>City: {weatherData.name}</p>
      <p>Temp: {cityTempJSX()}&deg;C</p>
      <p>(Min. {cityTempMinJSX()}&deg;C Max. {cityTempMaxJSX()}&deg;C)</p>
      <p>Humidity: {cityHumidityJSX()}</p>
    </>
  );
};

export default WeatherCard;
