import { useState } from 'react'
import { createContext } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
export const WeatherNowContext = createContext()

const WeatherNowProvider = ({ children }) => {
    const [weatherNowState, setWeatherNowState] = useState({})
    useEffect(() => {
        const load = async () => {
            const res = await axios.get(
                `${process.env.REACT_APP_URL_NOW}?location=HaNoi`
            )
            setWeatherNowState(res.data)
        }
        load()
    }, [])
    const getWeatherNow = async (city) => {
        try {
            const res = await axios.get(
                `${process.env.REACT_APP_URL_NOW}?location=${city}`
            )
            setWeatherNowState(res.data)
            return { success: true, data: res.data }
        } catch (error) {
            return { success: false, message: error.message }
        }
    }
    const dataExport = { weatherNowState, getWeatherNow }
    return (
        <WeatherNowContext.Provider value={dataExport}>
            {children}
        </WeatherNowContext.Provider>
    )
}
export default WeatherNowProvider
