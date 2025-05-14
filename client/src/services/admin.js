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

export const getAllSearchApartment = async (searchValue) => {
    try {

        const response = await axiosInstanceApartment.get(`/search/${searchValue}`)
        return response.data;
    } catch (error) {
        console.error('Error finding apartment results:', error);
        return [];
    }
};

export const getAllSearchAttraction = async (searchValue) => {
    try {
 
        const response = await axiosInstanceAttraction.get(`/search/${searchValue}`)
        return response.data;
    } catch (error) {
        console.error('Error finding attraction results:', error);
        return [];
    }
};

export const getAllSearchRestaurant = async (searchValue) => {
    try {

        const response = await axiosInstanceRestaurant.get(`/search/${searchValue}`);
        return response.data;
    } catch (error) {
        console.error('Error finding restaurant results:', error);
        return [];
    }
};

export const getApartmentByRating = async () => {
    try {
        const response = await axiosInstanceApartment.get(`/rating/${5}`, {
            params: { rating: 5 }
        });
        return response.data;
    } catch (error) {
        console.error('Error finding restaurant results:', error);
        return [];
    }
};