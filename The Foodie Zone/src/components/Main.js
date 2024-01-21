import Card from "./Card";
import { useState } from "react";
import resList from "../utils/mockData";

const Main = () => {
    const [restaurantList, setRestaurantList] = useState(resList);

    return (
        <div className="main">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = restaurantList.filter((restaurant) => {
                            return restaurant.rating > 4;
                        });
                        setRestaurantList(filteredList);
                    }}>
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
