import React, { useEffect } from 'react';
import GenericComponent from "../GeneriComponent";
import Categorys from "./categorys"
import Header from "./Header"


const HomePage = () => {

    useEffect(() => {
    
        console.log("הקומפוננטה נטענה");
    }, []);

    return (
        <>
            
            <Header />
            <Categorys />
            <GenericComponent />
        </>
    )
};

export default HomePage;

