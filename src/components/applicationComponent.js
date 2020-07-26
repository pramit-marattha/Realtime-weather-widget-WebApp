import React from 'react';
import './applicationComponent.css';
import { Realtime } from "./updateRealtimeComponent";
import { Hourly } from "./hourlyObsvComponent";
import { useApiHourlyData, useApiRealtimeData } from "../hooks/useWeatherHooks";
import ClimacellIcon from '../icons/climacell-icon-colored.svg';
import PinIcon from '../icons/pin.svg';
import { calcHourLogic } from "../logicCalculator";

const now = new Date();
const sixHoursFromNow = calcHourLogic({ date: now, hours: 6 });

function Loading() {
    return <div>Hold up!! Wait!! ... Its loading</div>;
}

function Error() {
    return <div>Oopsieee! Something Ain't right :(</div>;
}

function ClimateApi() {
    return (
        <div className="powered">
            <a className="powered-link" target="_blank" href="https://www.climacell.co">
                <img className="icon powered-icon" src={ClimacellIcon} alt="image"/>
            </a>
        </div>
    );
}

function App({ apikey, lat, lon, location }) {
    const [realtimeResponse, loadingRealtime, realtimeHasError] = useApiRealtimeData({
        apikey, lat, lon
    });
    const [hourlyResponse, loadingHourly, hourlyHasError] = useApiHourlyData({
        apikey, lat, lon, start: now, end: sixHoursFromNow
    });

    if (loadingRealtime || loadingHourly) {
        return <Loading />;
    }

    if (realtimeHasError || hourlyHasError) {
        return <Error />;
    }

    return (
        <div className="app-root">
            <div className="time">{now.toDateString()}</div>
            <div className="location">
                <img className="icon location-icon"
                     src={PinIcon}
                     alt={location}
                     title={location} />
                {location}
            </div>
            <Hourly hourly={hourlyResponse} />
            <div className="divider" />
            <Realtime realtime={realtimeResponse} />

            <ClimateApi />
        </div>

    );
}

export { App };
