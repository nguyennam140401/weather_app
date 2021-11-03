import './App.css'
import { Header } from './components/Header/Header'
import { useEffect } from 'react'
import Sunny from './assets/sunny.jpeg'
import WeatherNow from './components/WeatherNow/WeatherNow'
function App() {
    useEffect(() => {
        document.body.backgroundImage = Sunny
    }, [])
    return (
        <div className="App">
            <Header></Header>
            <WeatherNow></WeatherNow>
        </div>
    )
}

export default App
