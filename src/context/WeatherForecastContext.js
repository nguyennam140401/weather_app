import { useState } from 'react'
import { createContext } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
export const WeatherForecastContext = createContext()

const WeatherForecastProvider = ({ children }) => {
    const [weatherForecastState, setWeatherForecastState] = useState({})
    useEffect(() => {
        const load = async () => {
            const res = await axios.get(
                `${process.env.REACT_APP_URL_FORECAST}?location=Hanoi&days=7`
            )
            setWeatherForecastState(res.data)
        }
        load()
    }, [])
    const getWeatherForecast = async (city) => {
        try {
            const res = await axios.get(
                `${process.env.REACT_APP_URL_FORECAST}?location=${city}&day=7`
            )
            setWeatherForecastState(res.data)
            return { success: true, data: res.data }
        } catch (error) {
            return { success: false, message: error.message }
        }
    }
    const dataExport = { weatherForecastState, getWeatherForecast }
    return (
        <WeatherForecastContext.Provider value={dataExport}>
            {children}
        </WeatherForecastContext.Provider>
    )
}
export default WeatherForecastProvider
