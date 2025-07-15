// --> import state
import { useState } from 'react'

// --> import custom hook useWeather
import { useWeather } from '../context/WeatherContext'

const SearchForm = () => {

    // --> setting states
    const [city, setCity] = useState('')
    const { setError, getWeather } = useWeather()

    // --> handleSubmit
    function handleSubmit(e) {

        // --> prevent refresh page
        e.preventDefault()

        // --> validate trim field
        if (city.trim() === "") {
            console.log("--> [SEARCHFORM ERROR] Empty field from form")
            setError("please enter a city")
            return
        }
        return getWeather(city)
    }

    // --> form to search a city
    return (
        <>
            <form onSubmit={handleSubmit} className='w-full mb-4'>
                <div className='max-w-md w-full mx-auto border border-sky-400 rounded-full flex justify-between py-2 px-2'>
                    <input
                        id="city"
                        type="text"
                        value={city}
                        placeholder="Type a city name to search..."
                        onChange={(e) => setCity(e.target.value)}
                        className="w-2/3 px-4 py-2 placeholder-white text-white focus:outline-none focus:ring-0 focus:border-transparent"
                    />

                    <button
                        type="submit"
                        className='flex justify-center items-center p-2 rounded-full bg-[#001026]/30 cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                </div>
            </form>
        </>
    )
}

export default SearchForm