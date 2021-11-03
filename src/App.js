import './App.css'
import { Header } from './components/Header/Header'
import { useEffect, useLayoutEffect } from 'react'
import Sunny from './assets/cloud.jpeg'
import WeatherNow from './components/WeatherNow/WeatherNow'
import WeatherWeek from './components/WeatherWeek/WeatherWeek'
import * as util from './utils/setAuthToken'
function App() {
    useLayoutEffect(() => {
        util.setToken()
    })
    useEffect(() => {
        document.body.backgroundImage = Sunny
    }, [])
    return (
        <div className="App">
            <Header></Header>
            <WeatherNow></WeatherNow>
            <WeatherWeek></WeatherWeek>
        </div>
    )
}

export default App
