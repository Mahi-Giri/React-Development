import { useParams } from "react-router-dom";
import useRestorantData from "../utils/useRestorantData";
import Shimmar from "./Shimmer";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const restaurantData = useRestorantData(resId);

    if (restaurantData === null) {
        return <Shimmar />;
    }

    const { name, cuisines, areaName, feeDetails, sla, costForTwoMessage } = restaurantData?.cards[0]?.card?.card?.info;
    const { itemCards, title } = restaurantData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")}</p>
            <span>{areaName + ","}</span>
            <span>{sla.lastMileTravelString}</span>
            <div>
                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/${feeDetails.icon}`} />
                <p>{feeDetails.message}</p>
            </div>

            <div className="dash"></div>

            <div>
                <h1>{sla.slaString}</h1>
                <h1>{costForTwoMessage}</h1>
            </div>

            <h2 id="title">{`${title} (${itemCards.length})`}</h2>

            {itemCards.map((item, index) => (
                <div key={item.card.info.id}>
                    <div className="recommended_item">
                        <div className="recommended_item_name">
                            <div className="category">
                                {item?.card?.info?.itemAttribute?.vegClassifier === "VEG" && (
                                    <img src="https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png" />
                                )}

                                {item?.card?.info?.itemAttribute?.vegClassifier === "NONVEG" && (
                                    <img src="https://i.pinimg.com/474x/14/0b/0e/140b0e8a911d1734c496155aa97a56a8.jpg" />
                                )}
                                {item?.card?.info?.ribbon?.text != null && (
                                    <>
                                        <img src="https://img.freepik.com/premium-vector/star-icon-isolated-gold-vector-star-icon-star-flat-style_118339-1763.jpg" />
                                        <h4>{item?.card?.info?.ribbon?.text}</h4>
                                    </>
                                )}
                            </div>
                            <div className="info">
                                <div>
                                    <h3>{item?.card?.info?.name}</h3>
                                    <p>
                                        <i className="bi bi-currency-rupee"></i>
                                        {item?.card?.info?.price && <span>{item?.card?.info?.price / 100}</span>}
                                        {!item?.card?.info?.price && item?.card?.info?.defaultPrice && (
                                            <span>{item?.card?.info?.defaultPrice / 100}</span>
                                        )}
                                    </p>
                                </div>
                                <p>{item.card.info.description}</p>
                            </div>
                        </div>
                        <div className="recommended_item_icon">
                            <img
                                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item?.card?.info?.imageId}`}
                            />
                        </div>
                    </div>
                    {index !== itemCards.length - 1 && <div className="dash"></div>}
                </div>
            ))}
        </div>
    );
};

export default RestaurantMenu;
