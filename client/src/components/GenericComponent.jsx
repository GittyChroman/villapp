import { FaLongArrowAltLeft } from "react-icons/fa";


const GenericComponent = ({ arrPicture, header, details, listDetail, price, phoneNumber }) => {


    return (

        <div>
            {arrPicture?.map((item, index) => (
                <img key={index} src={item} alt={`image-${index}`} />
            ))}

            <h2>{header}</h2>
            <p>{details}</p>

            <ul>
                {listDetail?.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <div>{price}</div>
            <div>{phoneNumber}</div>
            <button>מידע נוסף
                <FaLongArrowAltLeft />
            </button>

        </div>

    );
};

export default GenericComponent;