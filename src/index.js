import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import WeatherNowContext from './context/WeatherNowContext'
import WeatherForecastContext from './context/WeatherForecastContext'
import WeatherContext from './context/WeatherContext'
ReactDOM.render(
    <React.StrictMode>
        <WeatherContext>
            <WeatherNowContext>
                <WeatherForecastContext>
                    <App />
                </WeatherForecastContext>
            </WeatherNowContext>
        </WeatherContext>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
