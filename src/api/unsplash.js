import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 9b3d9deec28be79f46cad3c2a18417dc8b3cc1e1516d144e224dcbc8ea8e4e46'
    }
})