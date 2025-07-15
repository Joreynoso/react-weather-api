const formatWeatherTime = (time) => {

    const timeRounded = Math.round(time / 60) * 60
    const timeDate = new Date(timeRounded * 1000)
    const timeWeather = timeDate.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    })

    return timeWeather 
}

export default formatWeatherTime