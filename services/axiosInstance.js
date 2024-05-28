import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://6628a0ff54afcabd07365b50.mockapi.io',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default axiosInstance;