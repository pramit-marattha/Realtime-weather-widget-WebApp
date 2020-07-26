import React from 'react';
import { getWeatherCodes } from "../icons";
import { finalDesignWeathercode } from "../logicCalculator";

function WeatherIcon({ value }) {
    const pretty = finalDesignWeathercode(value);
    return <img src={getWeatherCodes(value)} alt={pretty} title={pretty} />;
}

export { WeatherIcon };
