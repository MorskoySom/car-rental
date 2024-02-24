import axios from 'axios';

const BASE_URL = 'https://65d7c1b127d9a3bc1d7bc0a4.mockapi.io/adverts'

export const fetchData = async () => {
    try {
        const response = await axios.get(`${BASE_URL}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};