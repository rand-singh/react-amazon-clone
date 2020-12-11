import axios from 'axios';

const instance = axios.create({
    // THE API URL (cloud function)
    baseURL: 'http://localhost:5001/challenge-45940/us-central1/api' 
});

export default instance;