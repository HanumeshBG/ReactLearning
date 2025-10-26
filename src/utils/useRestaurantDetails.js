import { useEffect, useState } from "react";
import { SWIGGY_MENU_API_URL} from "../utils/constants";
import useFetch from "./useFetch";

const useRestaurantDetails = (resId) => {
    const [restaurantInfo, setRestaurantInfo] = useState(null);

    const {data, loading, error} = useFetch(`${SWIGGY_MENU_API_URL}${resId}`, {
                method: "GET",
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                }
            });
    useEffect(() => {
        if(data){
            setRestaurantInfo(data);
        }
    }, [data])
    return restaurantInfo;
}

export default useRestaurantDetails;