import { useState } from 'react'
import { createContext } from 'react'

export const WeatherContext = createContext()
const WeatherContextProvider = ({ children }) => {
    const [weatherState, setWeatherState] = useState({
        isTempC: true,
    })
    const changeTempC = () => {
        setWeatherState({ ...weatherState, isTempC: true })
    }
    const changeTempF = () => {
        setWeatherState({ ...weatherState, isTempC: false })
    }
    const data = { weatherState, changeTempC, changeTempF }
    return (
        <WeatherContext.Provider value={data}>
            {children}
        </WeatherContext.Provider>
    )
}
export default WeatherContextProvider
