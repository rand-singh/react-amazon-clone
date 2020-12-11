import axios from 'axios';

const instance = axios.create({
    // THE API URL (cloud function)
    baseURL: '...' 
});

export default instance;