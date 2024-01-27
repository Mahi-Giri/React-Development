import { RATING_LOGO, CARD_IMAGE } from "../utils/constant";

const Card = (props) => {
    const { data } = props;
    const { cloudinaryImageId, name, avgRating, cuisines, locality, sla } = data?.info;

    return (
        <div className="card">
            <img src={CARD_IMAGE + cloudinaryImageId} />
            <div className="info">
                <h3>{name}</h3>
                <div className="rating">
                    <img src={RATING_LOGO} />
                    <h4>{avgRating} •</h4>
                    <h4>{sla?.slaString}</h4>
                </div>
                <p>{cuisines.join(", ")}</p>
                <p> {locality} </p>
            </div>
        </div>
    );
};

export default Card;
