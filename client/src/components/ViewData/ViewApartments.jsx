import { useLocation } from "react-router-dom";
import GenericComponent from "../GenericComponent";
import Header from "../homePage/Header";

const ViewApartments = () => {

    const location = useLocation();
    const apartments = location.state?.apartments || [];

    return (
        <>
            <Header />
            {apartments.map((apartment, idx) => (
                <GenericComponent key={apartment._id || idx} resultData={apartment} type="apartment" />
            ))}

        </>
    )

};

export default ViewApartments;