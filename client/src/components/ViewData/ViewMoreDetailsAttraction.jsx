import { useLocation } from "react-router-dom";
import Header from "../homePage/Header";


const ViewMoreDetailsAttraction = () => {
    const location = useLocation();
    const attraction = location.state?.resultData;

    if (!attraction) {
        return <div>אין נתונים לאטרקציה</div>;
    }

    return (

        <>
            <Header />
            <div className="attractionDetails">
                <h3>{attraction.name}</h3>
                {attraction.pictures?.map((img, idx) => (
                    <img key={img} src={img} alt={`image-${idx}`} />
                ))}
                <div>
                    <h5>{attraction.area} :אזור</h5>
                    <h5>{attraction.descriptions}</h5>

                </div>
                {/* <h3>{apartment.user_id?.phone || "לא נמצא טלפון"}</h3> */}
            </div>
        </>
    )
};

export default ViewMoreDetailsAttraction;
