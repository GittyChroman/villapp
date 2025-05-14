import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const GenericComponent = ({ resultData, type }) => {

    const navigate = useNavigate();

    const handleMoreInfo = () => {
        const encodedName = encodeURIComponent(resultData.name);
        navigate(`/${type}${"s"}/${encodedName}`, { state: { resultData } });
    };




    return (
        <div style={{ direction: "rtl" }}>


            <div className="viewGeneric">
                {resultData.pictures?.map((img, idx) => (
                    <img key={idx} src={img} alt={`image - ${idx}`} />
                ))}

                <h2>{resultData.name}</h2>
                {type == "apartment" ?(<p>{resultData.descriptions?.description}</p>) : (<p>{resultData.descriptions}</p>)}

                <ul className="ulStyle">
                    <li>{resultData.area}</li>
                    {type == "apartment" && <li>{resultData.bads}</li>}
                    {type == "apartment" && <li>{Number(resultData.rooms.coupleRooms) + Number(resultData.rooms.otherRooms)}</li>}
                </ul>

                {type == "apartment" && <div>{resultData.descriptions?.price}</div>}
                {/* {type == "apartment" && <div>{resultData.phoneNumber || "לא נמצא טלפון"}</div>} */}

                <button onClick={handleMoreInfo}>
                    מידע נוסף <FaLongArrowAltLeft />
                </button>
            </div>


        </div >
    );
};

export default GenericComponent;






