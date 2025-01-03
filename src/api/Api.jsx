import axios from 'axios';

// view category

export const getCategory = async () => {
    try {
        const response = await axios.get('http://192.168.1.8:8000/api/category');
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
};

// view quiz
export const getQuiz = async () => {
    try {
        const response = await axios.get('http://192.168.1.8:8000/api/quizque');
        return response.data;
    } catch (error) {
        console.error('Error fetching quiz:', error);
        throw error;
    }
}

export const getPage = async () => {
    try {
        const response = await axios.get('http://192.168.1.8:8000/api/footer');
        // console.log(response.data.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching footer:", error);
        throw error;
    }
}

export const getPageAllData = async () => {
    try {
        const response = await axios.get(`http://192.168.1.8:8000/api/footer/all_data/`);

        return response.data; // Return only pagenames
    } catch (error) {
        console.error("Error fetching footer all data:", error);
        throw error;
    }
};


export const fetchGetPage = async (id) => {
    try {
        const response = await axios.get(`http://192.168.1.8:8000/api/footer/${id}`);
        console.log('API Response:', response.data);
        if (response.data && response.data.Data) {
            return response.data.Data;
        } else {
            console.error('No Data found');
            return [];
        }
    } catch (error) {
        console.error('Error fetching footer data:', error);
        throw error;
    }
};
    
export const getRules = async () => {
    try {
        const response = await axios.get('http://192.168.1.8:8000/api/rules');
        return response.data;
    } catch (error) {
        console.error('Error fetching quiz:', error);
        throw error;
    }
}