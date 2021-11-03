import styled from 'styled-components'
export default styled.div`
    display: flex;
    padding-top: 20px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    .weather_now {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .weather_city {
            text-align: center;
            font-size: 2rem;
            font-weight: 600;
        }
        .weather_temp {
            display: flex;
            margin-top: 20px;
            &--img {
                img {
                }
            }
            &--C {
                font-size: 3rem;
                margin: 0 20px;
            }
            &--options {
                button {
                    display: block;
                    border: none;
                    background-color: transparent;
                    font-size: 1rem;
                    margin-top: 1rem;
                    color: #bbb;
                    font-weight: 600;
                    cursor: pointer;
                    &.active {
                        color: var(--text-color);
                    }
                }
            }
        }
        .weather_details {
            &--title {
                font-size: 1.5rem;
            }
            &--more {
                display: grid;
                grid-template-columns: 30% 30% 30%;
                &__item {
                    width: max-content;
                    margin: 0.5rem 1rem;
                }
            }
        }
    }
`
