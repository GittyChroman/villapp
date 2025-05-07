import { IoBed } from "react-icons/io5";
import { GiSchoolBag } from "react-icons/gi";
import { MdFoodBank } from "react-icons/md";
import { getAllApartment, getAllAttraction, getAllRestaurant } from "../../services/admin";
import './Categorys.css';


const getApartments = () => {
    getAllApartment();
}
const getAttractions = () => {
    getAllAttraction();
}
const getRestaurants = () => {
    getAllRestaurant();
}


const Categorys = () => {


    return (
        <>
            <div>
            </div>
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
        </>
    )
};

export default Categorys;