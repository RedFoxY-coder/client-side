import axios from 'axios'

export const NewAxios = axios.create({
    baseURL: 'https://server-side-production-e7b3.up.railway.app/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
})
