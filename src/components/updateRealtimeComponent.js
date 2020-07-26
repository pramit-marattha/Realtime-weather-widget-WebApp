import React from 'react';
import './hourlyObsvComponent.css';
import { Temp } from "./temperatureComponent";
import { WeatherIcon } from "./icon";
import { finalDesignWeathercode } from "../logicCalculator";

function Realtime({ realtime }) {
    return (
        <div className="realtime">
            <div className="realtime-temp">Its, <Temp value={realtime.temp.value} /></div>
            <div className="realtime-temp-degrees">°Celsius</div>
            <div>
                <div className="realtime-weather-code">{finalDesignWeathercode(realtime.weather_code.value)}</div>
                <div className="realtime-feels-like">Its Exactly around <Temp value={realtime.feels_like.value} />° degree celsius, here in kathmandu</div>
            </div>
            <div className="realtime-icon">
                <WeatherIcon value={realtime.weather_code.value} />
            </div>
        </div>
    );
}

export { Realtime };
