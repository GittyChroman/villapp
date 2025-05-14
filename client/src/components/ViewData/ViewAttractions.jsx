
import { useLocation } from "react-router-dom";
import GenericComponent from "../GenericComponent";
import Header from "../homePage/Header"

const ViewAttractions = () => {

    const location = useLocation();
    const attractions = location.state?.attractions || [];

    return (
        <>
            <Header />
            {attractions.map((attraction, idx) => (
                <GenericComponent key={attraction._id || idx} resultData={attraction} type="attraction" />
            ))}

        </>
    )

};

export default ViewAttractions;