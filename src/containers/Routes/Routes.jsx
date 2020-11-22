import React from 'react';
import { Router } from "@reach/router";

import Weather from "../../components/Weather";
import Quiz from "../../components/Quiz";
import Football from "../../components/Football";


const Routes = () => {


    return (

        <Router>

            <Weather path="weather" />
            <Quiz path="quiz" />
            <Football path="football" />

        </Router>

    )
};

export default Routes;