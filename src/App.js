import './App.css'
import { Header } from './components/Header/Header'
import { useContext, useEffect, useLayoutEffect } from 'react'
import Cloud from './assets/cloud.jpeg'
import Rain from './assets/rain.jpeg'
import Sunny from './assets/sunny.jpeg'
import WeatherNow from './components/WeatherNow/WeatherNow'
import WeatherWeek from './components/WeatherWeek/WeatherWeek'
import * as util from './utils/setAuthToken'
import { WeatherNowContext } from './context/WeatherNowContext'
function App() {
    const { weatherNowState } = useContext(WeatherNowContext)
    const { condition } = weatherNowState
    useLayoutEffect(() => {
        util.setToken()
    })
    useEffect(() => {
        switch (condition) {
            case 'Sunny':
                document.body.style.backgroundImage = `url(${Sunny})`
                return
            case 'Patchy rain possible':
                document.body.style.backgroundImage = `url(${Rain})`
                return
            case 'Partly cloudy':
                document.body.style.backgroundImage = `url(${Cloud})`
                return
            case 'Cloudy':
                document.body.style.backgroundImage = `url(${Cloud})`
                return

            default:
                document.body.style.backgroundImage = `url(${Cloud})`
                return
        }

        // document.body.style.backgroundImage = `url(${Cloud})`
    }, [condition])
    return (
        <div className="App">
            <Header></Header>
            <WeatherNow></WeatherNow>
            <WeatherWeek></WeatherWeek>
        </div>
    )
}

export default App
