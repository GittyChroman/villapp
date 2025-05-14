
import { useLocation } from "react-router-dom";
import GenericComponent from "../GenericComponent";
import Header from "../homePage/Header";


const ViewRestaurants = () => {

    const location = useLocation();
    const restaurants = location.state?.restaurants || [];

    return (
        <>
            <Header />
            {restaurants.map((restaurant, idx) => (
                <GenericComponent key={restaurant._id || idx} resultData={restaurant} type="restaurant" />
            ))}
        </>
    )

};

export default ViewRestaurants;