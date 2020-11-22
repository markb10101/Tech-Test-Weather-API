import React from 'react';
import styles from "./Weather.module.scss";
import WeatherCard from "../WeatherCard";

const Weather = () => {


  return (
    <>
    <header>
      <h1>Live Weather Information</h1>
    </header>
    <div className={styles.cardsContainer}>
      <WeatherCard cityId={2643744} />
      <WeatherCard cityId={4749005} />
      <WeatherCard cityId={4219762} />
    </div>
    </>
  );
};

export default Weather;
