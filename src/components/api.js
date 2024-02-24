import axios from 'axios';

export const fetchData = async () => {
    try {
        const response = await axios.get('https://65d7c1b127d9a3bc1d7bc0a4.mockapi.io/adverts');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};