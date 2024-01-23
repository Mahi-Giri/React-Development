import Card from "./Card";
import { useState, useEffect } from "react";

const Main = () => {
    const [restaurantList, setRestaurantList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        setRestaurantList(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    return (
        <div className="main">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = restaurantList.filter((restaurant) => {
                            return restaurant.info.avgRatingString > 4;
                        });
                        setRestaurantList(filteredList);
                    }}
                >
                    Top Rated
                </button>
            </div>
            <div className="restaurant-container">
                {restaurantList.map((restaurant) => {
                    return <Card key={restaurant.id} data={restaurant} />;
                })}
            </div>
        </div>
    );
};

export default Main;
