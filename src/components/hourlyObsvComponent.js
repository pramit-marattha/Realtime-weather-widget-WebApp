import React from 'react';
import './hourlyObsvComponent.css';
import { calcTimeLogic } from "../logicCalculator";
import { Temp } from "./temperatureComponent";
import { WeatherIcon } from "./icon";

function Hourly({ hourly }) {
    return (
        <div className="hourly">
            {hourly.map(hour => (
                <div className="hour">
                    <div className="hour-time">{calcTimeLogic(hour.observation_time.value)}</div>
                    <div className="hour-icon"><WeatherIcon value={hour.weather_code.value} /></div>
                    <div className="hour-temp"><Temp value={hour.temp.value} />°</div>
                </div>
            ))}
        </div>
    );
}

export { Hourly };
