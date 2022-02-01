import axios from "axios";

const axiosInstance = apiKey => axios.create({
        baseURL: 'https://api.football-data.org/v2/',
        headers: { 'X-Auth-Token': apiKey },
    })
export default axiosInstance;