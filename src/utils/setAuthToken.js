import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()
export const setToken = () => {
    axios.defaults.headers.common['Authorization'] =
        'Bearer ' + process.env.REACT_APP_TOKEN
}
