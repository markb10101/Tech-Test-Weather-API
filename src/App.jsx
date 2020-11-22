import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';
import Routes from "./containers/Routes";
import NavBar from "./components/NavBar";


const App = () => {



  return (

    <>
    <NavBar />
    <Routes />

    </>

  );
}

export default App;
