import { useWeather } from "../context/WeatherContext"

// --> import iconsPath | dictionary of codes and icons
import iconsPath from '../services/iconsPaths'

const CardWeather = () => {

    // --> use context
    const { weatherData } = useWeather()
    const {
        name,
        main: { temp, feels_like, temp_min, temp_max },
        weather: [{ icon }] // --> code icon
    } = weatherData

    // --> use iconsPath to find icons match
    const urlPath = iconsPath[icon]

    // --> check data
    console.log("-->[URL PATH FROM ICONSPATH]", urlPath, icon)
    console.log("-->[CARD WEATHER] current weather data", weatherData)

    return (
        <>
            <div className="max-w-md w-full mx-auto rounded-2xl flex flex-col items-center gap-4">

                <div className='w-full p-4 flex justify-center items-center'>
                    {icon && <img src={urlPath} alt={icon} />}
                </div>

                <h2 className='text-white font-semibold text-8xl ml-2'>{Math.round(temp)}°</h2>

                {/* max & min temp */}
                <div className='text-center flex flex-col justify-center items-center'>
                    {/* location  */}
                    <div className='text-white text-sm flex justify-center items-cente mb-1'>
                        <img src="/icons/ico_map.svg" alt="rain icon" className='w-6 h-6 mr-1' />
                        <p className='text-white text-base font-medium'>{name}</p>
                    </div>

                    {/* min max temp */}
                    <div className='flex justify-items-center items-center gap-2'>
                        <p className='text-white font-medium'>Max: {temp_max}°</p>
                        <p className='text-white font-medium'>Min: {temp_min}°</p>
                    </div>
                </div>


                {/* rain, humidity, wind */}
                <div className='w-full py-3 bg-[#001026]/30 rounded-full flex justify-evenly items-center'>

                    {/* clodus */}
                    <div className='text-white text-sm flex justify-center items-center'>
                        <img src="/icons/ico_clouds.svg" alt="rain icon" className='w-6 h-6 mr-1' />
                        6%
                    </div>

                    {/* humidty */}
                    <div className='text-white text-sm flex justify-center items-center'>
                        <img src="/icons/icon_humidity.svg" alt="rain icon" className='w-6 h-6 mr-1' />
                        6%
                    </div>

                    {/* wind */}
                    <div className='text-white text-sm flex justify-center items-center'>
                        <img src="/icons/ico_wind.svg" alt="rain icon" className='w-6 h-6 mr-1' />
                        km/h
                    </div>

                </div>

                {/* extra information */}
                <div className="w-full px-4 py-3 bg-[#001026]/20 rounded-xl mt-2 text-white text-xs flex flex-col gap-1 text-center">
                    <p><span className="font-normal text-sm">Amanecer:</span> 07:42 AM</p>
                    <p><span className="font-normal text-sm">Atardecer:</span> 18:25 PM</p>
                    <p><span className="font-normal text-sm">Última actualización:</span> 20:45</p>
                    <p><span className="font-normal text-sm">Presión atmosférica:</span> 1013 hPa</p>
                    <p><span className="font-normal text-sm">Coordenadas:</span> -24.1895, -65.3023</p>
                    <p><span className="font-normal text-sm">Viento desde:</span> NE</p>
                </div>
            </div>
        </>
    )
}

export default CardWeather
