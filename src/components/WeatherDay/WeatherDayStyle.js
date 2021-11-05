import styled from 'styled-components'
export const Style = styled.div`
    .weather_day {
        &:hover {
            background-color: rgba(255, 255, 255, 0.2);
            transform: translateY(-15px);
        }
        background-color: transparent;
        padding: 1rem;
        width: max-content;
        transition: 0.5s;
        cursor: pointer;
        /* animation: animate1 10s ease-in-out; */
        @keyframes animate1 {
            0% {
                transform: translateY(20px) opacity(0);
            }
            100% {
                transform: translateY(0) opacity(1);
            }
        }
        &--date {
        }
        &--img {
        }
        &--temp {
            display: flex;
            color: var(--text-color);
            align-items: baseline;
            font-size: 1.5rem;
            margin-bottom: 1rem;
            .temp_min {
                color: #ccc;
                font-size: 1rem;
                margin-left: 1.5rem;
            }
        }
    }
`
