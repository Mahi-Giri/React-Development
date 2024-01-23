import Card from "./Card";
import { useState, useEffect } from "react";
import Shimmar from "./Shimmer";

const Main = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filtedRestaurant, setfiltedRestaurant] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        setRestaurantList(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfiltedRestaurant(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
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
                    Top Rated
                </button>
                <div className="search_bar">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchText}
                        onChange={(event) => {
                            setSearchText(event.target.value);
                        }}
                    />
                    <button
                        onClick={() => {
                            const filtedRestaurants = restaurantList.filter((restaurant) =>
                                restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setfiltedRestaurant(filtedRestaurants);
                        }}>
                        Search
                    </button>
                </div>
            </div>
            <div className="restaurant-container">
                {filtedRestaurant.map((restaurant) => {
                    return <Card key={restaurant.id} data={restaurant} />;
                })}
            </div>
        </div>
    );
};

export default Main;
