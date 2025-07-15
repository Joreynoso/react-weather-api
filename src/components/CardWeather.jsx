import { useWeather } from "../context/WeatherContext";

// --> import icon paths dictionary
import iconsPath from '../services/iconsPaths';

// --> import time formatting function
import formatWeatherTime from '../services/formatWeatherTime';

// --> import components
import { IconSun, IconMoon } from './Icons';

const CardWeather = () => {

    // Get weather data from context
    const { weatherData } = useWeather();

    const {
        name,
        clouds: { all },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        sys: { sunrise, sunset },
        wind: { speed, gust },
        weather: [{ icon }] // Icon code
    } = weatherData;

    // Get icon URL based on weather icon code
    const urlPath = iconsPath[icon];

    return (
        <>
            <div className="max-w-md w-full mx-auto rounded-2xl flex flex-col items-center gap-2 mb-6">

                {/* Weather icon */}
                <div className="w-full flex justify-center items-center">
                    {icon && <img src={urlPath} alt={icon} />}
                </div>

                {/* Current temperature */}
                <h2 className="text-white font-semibold text-8xl ml-2">
                    {Math.round(temp)}°
                </h2>

                {/* Location and min/max temperatures */}
                <div className="text-center flex flex-col justify-center items-center mb-2">

                    {/* Location */}
                    <div className="text-white text-sm flex justify-center items-center mb-1">
                        <img src="/icons/ico_map.svg" alt="location icon" className="w-6 h-6 mr-1" />
                        <p className="text-white text-base font-medium">{name}</p>
                    </div>

                    {/* Max and Min temperature */}
                    <div className="flex justify-center items-center gap-2">
                        <p className="text-white font-medium">Max: {temp_max}°</p>
                        <p className="text-white font-medium">Min: {temp_min}°</p>
                    </div>
                </div>

                {/* Clouds, humidity, wind speed */}
                <div className="w-full py-3 bg-[#001026]/30 rounded-full flex justify-evenly items-center">

                    {/* Clouds percentage */}
                    <div className="text-white text-sm flex justify-center items-center">
                        <img src="/icons/ico_clouds.svg" alt="clouds icon" className="w-6 h-6 mr-1" />
                        {all}%
                    </div>

                    {/* Humidity percentage */}
                    <div className="text-white text-sm flex justify-center items-center">
                        <img src="/icons/icon_humidity.svg" alt="humidity icon" className="w-6 h-6 mr-1" />
                        {humidity}%
                    </div>

                    {/* Wind speed */}
                    <div className="text-white text-sm flex justify-center items-center">
                        <img src="/icons/ico_wind.svg" alt="wind icon" className="w-6 h-6 mr-1" />
                        {speed} km/h
                    </div>

                </div>

                {/* Sunrise and sunset times */}
                <div className="w-full px-4 py-3 bg-[#001026]/30 rounded-2xl text-white text-xs flex flex-col text-center min-h-[56px] justify-center">
                    <div className="w-full flex justify-between items-center">

                        {/* Sunrise */}
                        <div className="flex items-center gap-2">
                            <IconSun />
                            <p className="text-white text-sm">{formatWeatherTime(sunrise)} AM</p>
                        </div>

                        {/* Sunset */}
                        <div className="flex items-center gap-2">
                            <IconMoon />
                            <p className="text-white text-sm">{formatWeatherTime(sunset)} PM</p>
                        </div>
                    </div>
                </div>

                {/* Feels like temperature */}
                <div className="w-full px-4 py-3 bg-[#001026]/30 rounded-2xl text-white text-xs flex flex-col text-center min-h-[56px] justify-center">
                    <div className="w-full flex justify-between items-center">
                        <p className="text-white text-sm">Feels Like</p>
                        <p className="text-white text-sm">{feels_like}°</p>
                    </div>
                </div>

                {/* Wind gust */}
                <div className="w-full px-4 py-3 bg-[#001026]/30 rounded-2xl text-white text-xs flex flex-col text-center min-h-[56px] justify-center">
                    <div className="w-full flex justify-between items-center">
                        <p className="text-white text-sm">Wind Gust</p>
                        <p className="text-white text-sm">{gust} km/h</p>
                    </div>
                </div>

            </div>
        </>
    );
};

export default CardWeather;
