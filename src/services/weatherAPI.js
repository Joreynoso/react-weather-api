// --> import axios
import axios from "axios"

// --> apikey
const url = import.meta.env.VITE_API_URL
const apiKey = import.meta.env.VITE_WEATHER_API
const country = import.meta.env.VITE_REGION || "AR"

// --> function to get weather by city name
export const fetchWeather = async (city) => {
  const urlComplete = `${url}?q=${city},${country}&appid=${apiKey}&units=metric`

  try {
    const response = await axios.get(urlComplete)
    return response.data
  } catch (error) {
    if (error.response) {
      console.log("--> [SERVICE ERROR] fetch response error")
      // --> create a variable to display error message
      const { status, data } = error.response

      // --> setting the text to show messages
      if (status === 404 && data.message === "city not found") throw new Error("city not found")
      if (status === 401) throw new Error("invalid api key")
      if (status === 429) throw new Error("limit exceed")

      // another errors
      throw new Error(`Error ${status}: ${data.message}`)
    }
  }
}
