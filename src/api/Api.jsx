import axios from 'axios';

export const getCategory = async () => {
    try {
        const response = await axios.get('http://192.168.1.9:8000/api/category');
        // console.log(response.data);
        return response.data;


    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
};
