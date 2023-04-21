import axios from 'axios';

const PRACTICE_API = axios.create({
    baseURL: "http://localhost:8080/",
    headers: {
        "Content-Type": "application/json"
    }
})

export default PRACTICE_API;
