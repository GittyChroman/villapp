
import React, { useEffect, useState } from 'react';
import GenericComponent from "../GenericComponent";
import Categorys from "./categorys"
import Header from "./Header"
import { getApartmentByRating } from '../../services/admin';
import './HomePage.css'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";



const HomePage = () => {

    const [apartmentRating, setApartmentRating] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {


        console.log("useeffect");
        const fetchData = async () => {
            const data = await getApartmentByRating();
            setApartmentRating(data);
        }

        fetchData();

    }, []);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % apartmentRating.length);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + apartmentRating.length) % apartmentRating.length);
    };


    return (
        <>

            <Header />
            <Categorys />
            <div className="genericDisplay" >
                <button onClick={prev}><IoIosArrowBack /></button>
                {apartmentRating.length > 0 && (
                    <GenericComponent resultData={apartmentRating[currentIndex]} type="apartment" />
                )}
                <button onClick={next}><IoIosArrowForward /></button>
            </div>

        </>
    )
};

export default HomePage;