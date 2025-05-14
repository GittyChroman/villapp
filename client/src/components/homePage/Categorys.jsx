import { IoBed } from "react-icons/io5";
import { GiSchoolBag } from "react-icons/gi";
import { MdFoodBank } from "react-icons/md";
import { getAllApartment, getAllAttraction, getAllRestaurant } from "../../services/admin";
import './Categorys.css';
import { useNavigate } from "react-router-dom";




const Categorys = () => {

    const navigate = useNavigate();


    const getApartments = async () => {
        try {
            const data = await getAllApartment();
            navigate("/apartments", { state: { apartments: data } });
        } catch (error) {
            console.error("Error fetching apartments", error);
        }
    };

    const getAttractions = async () => {
        try {
            const data = await getAllAttraction();
            navigate("/attractions", { state: { attractions: data } });
        } catch (error) {
            console.error("Error fetching attractions", error);
        }
    };

    const getRestaurants = async () => {
        try {
            const data = await getAllRestaurant();
            navigate("/restaurants", { state: { restaurants: data } });
        } catch (error) {
            console.error("Error fetching reastaurants", error);
        }
    };


    return (

        <div className="iconBar">
            <div className="iconItem" onClick={getApartments}>
                <IoBed />
                <p className="icon-text">צימרים</p>
            </div>
            <div className="iconItem" onClick={getAttractions}>
                <GiSchoolBag />
                <p className="icon-text">טיולים</p>

            </div>
            <div className="iconItem" onClick={getRestaurants}>
                <MdFoodBank />
                <p className="icon-text">מסעדות</p>
            </div>
        </div>

    )
};

export default Categorys;