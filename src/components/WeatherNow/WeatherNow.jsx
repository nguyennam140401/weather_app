import React from 'react'
import Style from './WeatherNowStyle'
import dotenv from 'dotenv'
import { WeatherNowContext } from '../../context/WeatherNowContext'
import { useContext } from 'react'
dotenv.config()
const WeatherNow = () => {
    const { weatherNowState } = useContext(WeatherNowContext)
    return (
        <Style>
            <div className="weather_now">
                <div className="weather_city">{weatherNowState.location}</div>
                <div className="weather_temp">
                    <div className="weather_temp--img">
                        <img src={weatherNowState.icon_url} />
                    </div>
                    <div className="weather_temp--C">
                        {weatherNowState.temp_c}
                        <sup>o</sup>
                    </div>
                    <div className="weather_temp--options">
                        <button className="active">C</button>
                        <button>F</button>
                    </div>
                </div>
                <div className="weather_details">
                    <div className="weather_details--title">
                        {weatherNowState.condition}
                    </div>
                    <div className="weather_details--more">
                        <div className="weather_details--more__item">
                            <p>
                                Feel like:{' '}
                                <span>
                                    {weatherNowState.feels_like_c}
                                    <sup>o</sup>
                                </span>
                            </p>
                        </div>
                        {/* <div className="weather_details--more__item">
                            <p>
                                Max temp:{' '}
                                <span>
                                    30<sup>o</sup>
                                </span>
                            </p>
                        </div>
                        <div className="weather_details--more__item">
                            <p>
                                Min temp:{' '}
                                <span>
                                    30<sup>o</sup>
                                </span>
                            </p>
                        </div> */}
                        <div className="weather_details--more__item">
                            <p>
                                Humidity:{' '}
                                <span>{weatherNowState.humidity}</span>
                            </p>
                        </div>
                        <div className="weather_details--more__item">
                            <p>
                                Wind speed:{' '}
                                <span>
                                    {weatherNowState.wind_mph}
                                    <sup>mph</sup>
                                </span>
                            </p>
                        </div>
                        <div className="weather_details--more__item">
                            <p>
                                Wind degree:{' '}
                                <span>
                                    {weatherNowState.wind_degree}
                                    <sup>o</sup>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Style>
    )
}

export default WeatherNow
