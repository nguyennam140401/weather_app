import React from 'react'
// import styled from 'styled-components'
import { Style } from './HeaderStyle'
import SearchIcon from '@mui/icons-material/Search'
export const Header = () => {
    return (
        <Style>
            <div className="logo">VanNam</div>
            <div className="options">
                <form>
                    <input type="text" placeholder="Search City" />
                    <button>
                        <SearchIcon></SearchIcon>
                    </button>
                </form>
            </div>
        </Style>
    )
}
