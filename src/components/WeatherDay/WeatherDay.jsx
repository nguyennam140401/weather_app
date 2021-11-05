import React from 'react'
import { useContext } from 'react'
import { WeatherContext } from '../../context/WeatherContext'
import { Style } from './WeatherDayStyle'
const WeatherDay = ({ data }) => {
    const {
        weatherState: { isTempC },
    } = useContext(WeatherContext)
    return (
        <div>
            <Style>
                <div className="weather_day">
                    <div className="weather_day--date">{data.date}</div>
                    <div className="weather_day--img">
                        <img src={data.icon_url} alt="icon weather" />
                    </div>
                    <div className="weather_day--temp">
                        <div className="temp_max">
                            {isTempC ? data.max_temp_c : data.max_temp_f}
                            <sup>o</sup>
                        </div>
                        <div className="temp_min">
                            {isTempC ? data.min_temp_c : data.min_temp_f}
                            <sup>o</sup>
                        </div>
                    </div>
                    <div className="weather_day--title">{data.condition}</div>
                </div>
            </Style>
        </div>
    )
}

export default WeatherDay
