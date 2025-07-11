import { useParams } from "react-router-dom";
import useRestaurantDetails from "../utils/useRestaurantDetails";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantDetails = () => { 
    const { resId } = useParams();  
    const restaurantInfo = useRestaurantDetails(resId)
    const [showItems, setShowItems] = useState(0);

    if(restaurantInfo == null || restaurantInfo == undefined) return <Shimmer />

    const { name, cuisines, costForTwoMessage, locality, areaName, city, avgRatingString} = restaurantInfo?.data.cards[2]?.card?.card?.info;

    const categorys = restaurantInfo?.data.cards?.[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter((card) => card.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    
    return (
        <div className="w-9/12 m-auto p-4">
            <div className="text-center">
                <h1 className="font-bold text-2xl my-4">{name}</h1>
                <div className="">
                    <h2>Rating: {avgRatingString} - {costForTwoMessage} </h2>
                    <p>{cuisines.join(", ")}</p>
                    <p>{locality}, {areaName}, {city}</p>    
                </div>
            </div>
            <div>
                {categorys.map((category, index) => (
                    <RestaurantCategory key={category?.card?.card?.categoryId} data={category?.card?.card}
                        showItems={index === showItems ? true : false}
                        setShowItems={() => setShowItems(index)}
                    />
                ))}
            </div>
        </div>
    )
}

export default RestaurantDetails;