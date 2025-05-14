import { useLocation } from "react-router-dom";
import Header from "../homePage/Header";


const ViewMoreDetailsRestaurant = () => {
    const location = useLocation();
    const restaurant = location.state?.resultData;

    if (!restaurant) {
        return <div>אין נתונים זמינים למסעדה</div>;
    }

    return (

        <>
            <Header />
            <div className="restaurantDetails">
                <h3>{restaurant.name}</h3>
                {restaurant.pictures?.map((img, idx) => (
                    <img key={img} src={img} alt={`image-${idx}`} />
                ))}
                <div>
                    <h5>{restaurant.type}</h5>
                    <h5>{restaurant.description}</h5>
                </div>
                {/* <h3>{apartment.user_id?.phone || "לא נמצא טלפון"}</h3> */}
            </div>
        </>
    )
};

export default ViewMoreDetailsRestaurant;
