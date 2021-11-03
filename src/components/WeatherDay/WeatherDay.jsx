import React from 'react'
import { Style } from './WeatherDayStyle'
const WeatherDay = () => {
    return (
        <div>
            <Style>
                <div className="weather_day">
                    <div className="weather_day--date">Fri 23</div>
                    <div className="weather_day--img">
                        <img src="//cdn.weatherapi.com/weather/64x64/night/116.png" />
                    </div>
                    <div className="weather_day--temp">
                        <div className="temp_max">30</div>
                        <div className="temp_min">20</div>
                    </div>
                    <div className="weather_day--title">Partly cloudy</div>
                </div>
            </Style>
        </div>
    )
}

export default WeatherDay
