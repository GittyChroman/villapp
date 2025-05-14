import { FaLongArrowAltLeft } from "react-icons/fa";
import './GenericComponent.css';
import { PiMapPinAreaFill } from "react-icons/pi";
import { useEffect, useState } from "react";
import { getUserById } from "../services/admin";
import { IoBed } from "react-icons/io5";
import { MdMeetingRoom } from "react-icons/md";


const GenericComponent = ({ resultData, type }) => {
    const [phoneNumber, setPhoneNumber] = useState();


    useEffect(() => {


        const fetchData = async () => {
            const user = await getUserById(resultData.user_id);
            console.log("user", user.Object);
            setPhoneNumber(user.phone)
        }

        if (resultData?.user_id) {
            fetchData();
        }

    }, [resultData?.user_id]);


    return (
        <div className="viewGeneric" >
            <div className="genericImg">
                {resultData.pictures[0]}
            </div>

            <div className="genericDetails">
                <h2>{resultData.name}</h2>
                {type == "apartment" ? (<p>{resultData.descriptions?.description}</p>) : (<p>{resultData.descriptions}</p>)}

                <ul>
                    <li> <PiMapPinAreaFill />{resultData.area}</li>
                    {type == "apartment" && <li><IoBed />{resultData.beds}</li>}
                    {type == "apartment" &&
                        <li> <MdMeetingRoom />
                            {Number(resultData.rooms.coupleRooms) + Number(resultData.rooms.otherRooms)}
                        </li>}
                </ul>

                {type == "apartment" && <div>{resultData.descriptions?.price}</div>}
                {type == "apartment" && <div className="phoneGeneric">{phoneNumber}</div>}

                <button className="genericButton">
                    מידע נוסף <FaLongArrowAltLeft />
                </button>
            </div>
        </div>
    );
};

export default GenericComponent;