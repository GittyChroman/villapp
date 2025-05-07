import { createAxiosInstance } from "../config/axiosInstance";

const axiosInstanceApartment = createAxiosInstance("/apartments");
const axiosInstanceAttraction = createAxiosInstance("/attractions");
const axiosInstanceRestaurant = createAxiosInstance("/restaurants");




export const getAllApartment = async () => {

    try {
        const response = await axiosInstanceApartment.get("/");
        return response.data
    } catch (error) {
        console.error('Error finding apartment:', error);
        return [];
    }
};
export const getAllAttraction = async () => {

    try {
        const response = await axiosInstanceAttraction.get("/");
        return response.data
    } catch (error) {
        console.error('Error finding attraction:', error);
        return [];
    }
};
export const getAllRestaurant = async () => {

    try {
        const response = await axiosInstanceRestaurant.get("/");
        return response.data
    } catch (error) {
        console.error('Error finding restaurant:', error);
        return [];
    }
};
export const getAllResultsApartment = async (results) => {
    try {
        const response = await axiosInstanceApartment.get("/", {
            params: { search: results }
        });
        return response.data;
    } catch (error) {
        console.error('Error finding apartment results:', error);
        return [];
    }
};
export const getAllResultsAttraction = async (results) => {
    try {
        const response = await axiosInstanceAttraction.get("/", {
            params: { search: results }
        });
        return response.data;
    } catch (error) {
        console.error('Error finding attraction results:', error);
        return [];
    }
};
export const getAllResultsRestaurant = async (results) => {
    try {
        const response = await axiosInstanceRestaurant.get("/", {
            params: { search: results }
        });
        return response.data;
    } catch (error) {
        console.error('Error finding restaurant results:', error);
        return [];
    }
};