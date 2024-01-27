import { RATING_LOGO, CARD_IMAGE } from "../utils/constant";

const Search_Card = (props) => {
    const { data } = props;
    const { cloudinaryImageId, name } = data?.info;

    return (
        <div className="search_card">
            <img src={CARD_IMAGE + cloudinaryImageId} />
            <h3>{name}</h3>
        </div>
    );
};

export default Search_Card;
