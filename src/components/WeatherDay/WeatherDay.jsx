import React from 'react'
import { Style } from './WeatherDayStyle'
const WeatherDay = ({ data }) => {
    return (
        <div>
            <Style>
                <div className="weather_day">
                    <div className="weather_day--date">{data.date}</div>
                    <div className="weather_day--img">
                        <img src={data.icon_url} />
                    </div>
                    <div className="weather_day--temp">
                        <div className="temp_max">
                            {data.max_temp_c}
                            <sup>o</sup>
                        </div>
                        <div className="temp_min">
                            {data.min_temp_c}
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
