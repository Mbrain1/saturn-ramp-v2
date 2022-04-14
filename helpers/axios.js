import axios from "axios";

const axiosBase = axios.create({
    baseURL:"https://api.saturncryptovc.com/api",
    headers: {
        'Content-Type': 'application/json',
    }
});

export default axiosBase;