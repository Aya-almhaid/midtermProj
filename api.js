import axios from "axios";

// Axios instance to connect frontend and backend
const api = axios.create({
    baseURL: "http://localhost:5002/api", // adjust port/path if needed
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
