import { RATING_LOGO } from "../utils/constant";

const Card = (props) => {
    const { data } = props;
    return (
        <div className="card">
            <img src={data.img} />
            <div className="info">
                <h3>{data.Name}</h3>
                <div className="rating">
                    <img src={RATING_LOGO} />
                    <h4>{data.rating} •</h4>
                    <h4>{data.time} mins</h4>
                </div>
                <p>{data.dishName}</p>
                <p> {data.place} </p>
            </div>
        </div>
    );
};

export default Card;
