// --> import components
import CardWeather from './CardWeather'
import ErrorCard from './ErrorCard'
import LoadingCard from './LoadingCard'

// --> import useWeather custom hook
import { useWeather } from '../context/WeatherContext'

const DisplayController = () => {

    // --> use hook from display cards
    const { error, loading, weatherData } = useWeather()

    // --> display controller
    if (loading) return <LoadingCard />
    if (error) return <ErrorCard message={error} />
    if (weatherData) return <CardWeather />

    // --> if any of this conditions happens, do nothing
    return null
}

export default DisplayController