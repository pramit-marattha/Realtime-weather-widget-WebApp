import { useFetchhook } from "./useFetchHooks";
import { realtimeMakeUrl } from "../logicCalculator";


const useApiHourlyData = ({ apikey, lat, lon, start, end }) => {
    const url = realtimeMakeUrl({
        url: 'https://api.climacell.co/v3/weather/forecast/hourly',
        query: {
            //Insert your Api key
            apikey: '',
            lat: '27.7172',
            lon: '85.3240',
            unit_system: 'si',
            fields: 'temp,precipitation,feels_like,weather_code',
            start_time: start.toISOString(),
            end_time: end.toISOString()
        }
    });

    return useFetchhook({ url });
};

const useApiRealtimeData = ({ apikey, lat, lon }) => {
    const url = realtimeMakeUrl({
        url: 'https://api.climacell.co/v3/weather/realtime',
        query: {
            //Insert your Api key
            apikey: '',
            lat: '27.7172',
            lon: '85.3240',
            unit_system: 'si',
            fields: 'precipitation,temp,feels_like,weather_code',
        }
    });

    return useFetchhook({ url });
};

export { useApiHourlyData, useApiRealtimeData };
