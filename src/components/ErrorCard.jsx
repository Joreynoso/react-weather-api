import { useWeather } from '../context/WeatherContext'

const ErrorCard = ({ message }) => {
    const { setError } = useWeather()

    return (
        <div className="max-w-md w-full mx-auto p-6 bg-white rounded-2xl shadow-md border border-red-100 text-center relative">
            <button
                onClick={() => setError(null)}
                className="absolute top-2 right-3 text-red-400 hover:text-red-600 text-lg font-bold"
                aria-label="Cerrar"
            >
                ×
            </button>
            <span className="text-red-600 text-lg font-medium">
                {message}
            </span>
        </div>
    )
}

export default ErrorCard
