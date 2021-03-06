
const realtimeMakeUrl = ({ url, query = {} }) => {
    const urlBuilder = new URL(url);

    Object.entries(query).forEach(([key, value]) => {
        if (value == null) {
            return;
        }
        if (Array.isArray(value)) {
            value.forEach(val => urlBuilder.searchParams.append(key, val));
            return;
        }
        urlBuilder.searchParams.append(key, value);
    });
    return urlBuilder.toString();
};

const calcHourLogic = ({ date, hours = 0 }) => {
    const newDate = new Date(date.valueOf());
    newDate.setTime(date.getTime() + hours * 60 * 60 * 1000);
    return newDate;
};

const calcTimeLogic = (time) => {
    const hours = new Date(time).getHours();
    const suffix = hours >= 12 ? 'pm' : 'am';
    let display = hours % 12;
    if (display === 0) {
        display = 12;
    }
    return `${display}${suffix}`;
};

const finalDesignWeathercode = (str) =>{
    return str.replace('_', ' ').replace(/\b[a-zA-Z]/g, (first) =>first.toUpperCase());
};

export { realtimeMakeUrl, calcHourLogic, calcTimeLogic, finalDesignWeathercode };
