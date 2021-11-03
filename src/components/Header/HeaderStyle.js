import styled from 'styled-components'
export const Style = styled.div`
    height: var(--height-header);
    background-color: var(--first-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    .logo {
        color: var(--text-color);
        font-size: 22px;
        font-weight: 600;
    }
    .options {
        form {
            display: flex;
            border-radius: var(--br);
            overflow: hidden;
            input,
            button {
                background-color: var(--second-color);
                border: none;
                outline: none;
                color: var(--text-color);
                padding-right: 0.5rem;
            }
            input {
                font-size: 20px;
                padding: 0.25rem 0.5rem;
            }
            input::placeholder {
                color: var(--text-color);
            }
        }
    }
`
