import { useParams } from "react-router-dom";
import useRestaurantDetails from "../utils/useRestaurantDetails";
import Shimmer from "./Shimmer";

const RestaurantDetails = () => { 
    const { resId } = useParams();  
    const restaurantInfo = useRestaurantDetails(resId)

    if(restaurantInfo == null || restaurantInfo == undefined) return <Shimmer />

    const { name, cuisines, costForTwoMessage, locality, areaName, city, avgRatingString} = restaurantInfo?.data.cards[2]?.card?.card?.info;

    return (
        <div>   
            <h1>{name} - {costForTwoMessage}</h1>
            <h2>Rating: {avgRatingString}</h2>
            <p>{cuisines.join(", ")}</p>
            <p>{locality}, {areaName}, {city}</p>    
            <div>
                <h2>Menu</h2>
                <ul>
                    <li>Biryani - $10</li>
                    <li>Paneer Butter Masala - $12</li>
                    <li>Chicken Curry - $15</li>
                    <li>Veg Fried Rice - $8</li>
                    <li>Gulab Jamun - $5</li>
                </ul>
            </div>
        </div>
    )
}

export default RestaurantDetails;