import axios from "axios";
import {apiKey} from "./apiKey";
export const FootballDataAPI = require('footballdata-api-js');
export const api = FootballDataAPI.getAPIWrapper(apiKey);

const axiosInstance = apiKey => axios.create({
        baseURL: 'https://api.football-data.org/v2/',
        headers: { 'X-Auth-Token': apiKey },
    })
export default axiosInstance;