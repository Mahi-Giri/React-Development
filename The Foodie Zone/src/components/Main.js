import Card from "./Card";
import { useState, useEffect } from "react";
import Shimmar from "./Shimmer";
import { Link } from "react-router-dom";

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
        console.log(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    if (restaurantList.length === 0) {
        return <Shimmar />;
    }

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
                    }}>
                    Filter
                </button>
            </div>
            <div className="restaurant-container">
                {restaurantList.map((restaurant) => {
                    return (
                        <Link key={restaurant?.id} to={"/restaurants/" + restaurant?.info?.parentId}>
                            <Card data={restaurant} />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Main;
