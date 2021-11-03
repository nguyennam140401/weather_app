import React from 'react'
import Style from './WeatherNowStyle'
const WeatherNow = () => {
    return (
        <Style>
            <div className="weather_now">
                <div className="weather_city">Hà Nội</div>
                <div className="weather_temp">
                    <div className="weather_temp--img">
                        <img src="" alt="" />
                    </div>
                    <div className="weather_temp--C">
                        30<sup>o</sup>
                    </div>
                    <div className="weather_temp--options">
                        <button>C</button>
                        <button>F</button>
                    </div>
                </div>
                <div className="weather_details">
                    <div className="weather_details--title">Mostly Cloudy</div>
                    <div className="weather_details--more">
                        <div className="weather_details--more__item">
                            <p>
                                Feel like:{' '}
                                <span>
                                    30<sup>o</sup>
                                </span>
                            </p>
                        </div>
                        <div className="weather_details--more__item">
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
                        </div>
                        <div className="weather_details--more__item">
                            <p>
                                Humidity:{' '}
                                <span>
                                    30<sup>o</sup>
                                </span>
                            </p>
                        </div>
                        <div className="weather_details--more__item">
                            <p>
                                Wind speed:{' '}
                                <span>
                                    30<sup>o</sup>
                                </span>
                            </p>
                        </div>
                        <div className="weather_details--more__item">
                            <p>
                                wind_degree:{' '}
                                <span>
                                    30<sup>o</sup>
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
