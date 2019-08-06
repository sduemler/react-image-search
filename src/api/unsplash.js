import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID d097fecf4411eb8c3b6f475e7dd5a9d6ba738ec194af2699641120006ee6419e'
    }
});