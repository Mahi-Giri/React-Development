import { RATING_LOGO, CARD_IMAGE } from "../utils/constant";

const Card = (props) => {
    const { data } = props;
    const { cloudinaryImageId, name, avgRating, cuisines, locality, sla } = data?.info;

    return (
        <div className="card w-full p-4 flex flex-col gap-4">
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

// Higher Order components

export const withOpenLabel = (Card) => {
    return (props) => {
        return (
            <div className="label">
                <label>Opened</label>
                <Card {...props} />
            </div>
        );
    };
};

export default Card;
