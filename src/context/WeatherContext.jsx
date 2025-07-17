import { createContext, useContext } from 'react'
import { useState } from 'react'
import { fetchWeather } from '../services/weatherAPI'

export const WeatherContext = createContext(null)

export const WeatherProvider = ({ children }) => {

    // --> set states
    const [weatherData, setWeatherData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    // --> get weather
    const getWeather = async (city) => {
        setLoading(true)
        setError(null)

        // --> await to fetch response to continue
        try {
            const response = await fetchWeather(city)
            setWeatherData(response) // --> setting response to state
        } catch (error) {
            console.log("--> [CONTEXT ERROR] failed to get response")
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    /// --> clearWeather status & error 
    const clearWeather = () => {
        setWeatherData(null)
        setError(null)
    }

    return (
        <WeatherContext.Provider value={{ weatherData, loading, error, getWeather, clearWeather, setError }}>
            {children}
        </WeatherContext.Provider>
    )
}

// --> customHook to use context
export const useWeather = () => useContext(WeatherContext)