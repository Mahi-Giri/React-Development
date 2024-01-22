import { RATING_LOGO, CARD_IMAGE } from "../utils/constant";

const Card = (props) => {
    const { data } = props;
    console.log(data);
    return (
        <div className="card">
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${data.info.cloudinaryImageId}`} />
            <div className="info">
                <h3>{data.info.name}</h3>
                <div className="rating">
                    <img src={RATING_LOGO} />
                    <h4>{data.info.avgRating} •</h4>
                    <h4>{data.info.sla.deliveryTime} mins</h4>
                </div>
                <p>{data.info.cuisines}</p>
                <p> {data.info.locality} </p>
            </div>
        </div>
    );
};

export default Card;
