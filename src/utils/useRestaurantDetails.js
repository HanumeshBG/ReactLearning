import { useEffect, useState } from "react";
import { SWIGGY_MENU_API_URL} from "../utils/constants";

const useRestaurantDetails = (resId) => {
    const [restaurantInfo, setRestaurantInfo] = useState(null);

    useEffect(() => {
        fetchRestaurantDetails();
    }, []);

    const fetchRestaurantDetails = async () => {
        try {
            const data = await fetch(
                `${SWIGGY_MENU_API_URL}${resId}`
            );
            const json = await data.json(); 
            setRestaurantInfo(json)
        } catch (error) {
            console.error("Error fetching restaurant details:", error); 
        }  
    }

    return restaurantInfo;
}

export default useRestaurantDetails;