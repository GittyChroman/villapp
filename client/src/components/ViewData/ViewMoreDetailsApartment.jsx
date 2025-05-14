import { useLocation } from "react-router-dom";
import Header from "../homePage/Header";


const ViewMoreDetailsApartment = () => {
    const location = useLocation();
    const apartment = location.state?.resultData;

    if (!apartment) {
        return <div>אין נתונים זמינים לדירה</div>;
    }

    return (

        <>
            <Header />
            <div className="apartmentDetails">
                <h3>{apartment.name}</h3>
                {apartment.pictures?.map((img, idx) => (
                    <img key={img} src={img} alt={`image-${idx}`} />
                ))}
                <div>
                    <h5>{apartment.area} :אזור</h5>
                    <h5>{apartment.bads} :מספר מיטות</h5>
                    <h5>{apartment.rooms.coupleRooms} :מספר חדרים לזוגות</h5>
                    <h5>{apartment.rooms.otherRooms} :מספר חדרים נוספים</h5>
                </div>
                {/* <h3>{apartment.user_id?.phone || "לא נמצא טלפון"}</h3> */}
            </div>
        </>
    )
};

export default ViewMoreDetailsApartment;
