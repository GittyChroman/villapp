import axios from "axios";

export const createAxiosInstance = (prefix) => {

    
    const instance = axios.create({
        baseURL: "http://localhost:8080/api" + prefix,
        headers: {
            'Content-Type': 'application/json',
        },
        params: {
            timestamp: new Date().getTime()
        }
    });

    instance.interceptors.request.use(
        (config) => {
            console.log("config",config);
            return config;
        },
        (error) => {
            console.error("Axios Interceptor Error:", error);
            return Promise.reject(error);
        }
    );
    return instance;

};