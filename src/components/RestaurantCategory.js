import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data, showItems, setShowItems }) => {
    const handleClick = () => {
        setShowItems();
    }
    
    return (
        <div className="px-2">
            <div className="mx-auto my-4 bg-gray-50 shadow-lg flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="text-lg font-bold">{data.title}</span>
                <span className="material-icons">arrow_drop_down</span>
            </div>
            {showItems && <ItemList data={data?.itemCards}/>}
        </div>
    )
}

export default RestaurantCategory;