import React from 'react'
// import styled from 'styled-components'
import { Style } from './HeaderStyle'
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'
import { WeatherNowContext } from '../../context/WeatherNowContext'
import { useContext } from 'react'
import { convertVie } from '../../utils/convertVie'
export const Header = () => {
    const [cityName, setCityName] = useState('')
    const { getWeatherNow } = useContext(WeatherNowContext)
    const searchCity = (e) => {
        e.preventDefault()
        getWeatherNow(convertVie(cityName))
    }
    return (
        <Style>
            <div className="logo">VanNam</div>
            <div className="options">
                <form onSubmit={searchCity}>
                    <input
                        type="text"
                        placeholder="Search City"
                        name="cityName"
                        value={cityName}
                        onChange={(e) => {
                            setCityName(e.target.value)
                        }}
                    />
                    <button>
                        <SearchIcon></SearchIcon>
                    </button>
                </form>
            </div>
        </Style>
    )
}
