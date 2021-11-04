import React from 'react'
import { Style } from './WeatherWeekStyle'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import WeatherDay from '../WeatherDay/WeatherDay'
import { WeatherForecastContext } from '../../context/WeatherForecastContext'
import { useContext } from 'react'
const WeatherWeek = () => {
    const { weatherForecastState } = useContext(WeatherForecastContext)

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }
    return (
        <div>
            <Style>
                <div className="title">Daily</div>
                <Slider {...settings}>
                    {weatherForecastState.forecast &&
                        weatherForecastState.forecast.map((item, idx) => {
                            return (
                                <WeatherDay key={idx} data={item}></WeatherDay>
                            )
                        })}
                </Slider>
                {/* <WeatherDay></WeatherDay> */}
            </Style>
        </div>
    )
}

export default WeatherWeek
