import { useState, useEffect } from "react";
import Search_Card from "./Search_Card";

const Search = () => {
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

    return (
        <div className="main">
            <div className="filter">
                <div className="search_bar">
                    <input
                        type="text"
                        placeholder="Search for restaurants and food..."
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
            <div className="search-container">
                {filtedRestaurant.map((restaurant) => {
                    return <Search_Card key={restaurant.id} data={restaurant} />;
                })}
            </div>
        </div>
    );
};

export default Search;
