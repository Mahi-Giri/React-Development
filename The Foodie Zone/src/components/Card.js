import { RATING_LOGO, CARD_IMAGE } from "../utils/constant";

const Card = (props) => {
    const { data } = props;
    return (
        <div className="card">
            <img src={CARD_IMAGE + data.info.cloudinaryImageId} />
            <div className="info">
                <h3>{data.info.name}</h3>
                <div className="rating">
                    <img src={RATING_LOGO} />
                    <h4>{data.info.avgRating} •</h4>
                    <h4>{data.info.sla.deliveryTime} mins</h4>
                </div>
                <p>{data.info.cuisines.join(', ')}</p>
                <p> {data.info.locality} </p>
            </div>
        </div>
    );
};

export default Card;
