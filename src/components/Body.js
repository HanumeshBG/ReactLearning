import RestaurantCard, {WithPromotedLabel} from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [searchText, setSearchText] = useState("");

    const { LoggedInUser, setUserName } = useContext(UserContext);

    const RestaurantCardPromoted = WithPromotedLabel(RestaurantCard);

    useEffect(() => {
      fetchData()
    },[]);

    const fetchData = async () => {
      try {
        const data = await fetch(
          // "https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api"
          SWIGGY_API_URL
        )
        const json = await data.json();
        let xRestaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestaurants(xRestaurants);
        setFilteredList(xRestaurants);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

  
  return restaurants.length === 0 ? <Shimmer /> : (
    <div className='body'>
      <div className='m-3 p-2 flex justify-between items-center'>
        <div className='p-2 flex items-center gap-2'>
          <input data-testid="restSearch" className="pl-1 border border-solid rounded-lg" type="text" placeholder='Search...' value={searchText} onChange={(e) => {
            setSearchText(e.target.value);
          }}/>
          <button className='px-2 bg-blue-200 rounded-lg hover:bg-blue-300 hover:cursor-pointer' onClick={() => {
            const filtered = restaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredList(filtered);
          }}>Search</button>
        </div>
        <div className="p-2 bg-gray-100 rounded-lg flex items-center gap-2 hover:bg-gray-200 hover:cursor-pointer">
          <button 
            className=''
            onClick={() => {
                    const filtered = restaurants.filter((res) => res.info.avgRating > 4.0);
                    setFilteredList(filtered);
                }}
            > Top Rated Restaurant</button>
        </div>
        <div className="p-2 rounded-lg flex items-center gap-2">
          <label className="font-bold">User: </label>
          <input type="text" className="px-2 border border-black" value={LoggedInUser} onChange={(e) => {setUserName(e.target.value)}} />
        </div>
        <div/>
      </div>
      <div className='flex flex-wrap justify-center items-center gap-2'>
        {
          filteredList.map((restaurant) => (
            <Link key={restaurant.info.id} to={`/restaurant/${restaurant.info.id}`}>
              {restaurant.info.Promoted == undefined ? <RestaurantCardPromoted resData={restaurant} /> : <RestaurantCard resData={restaurant} />}
            </Link>
          ))
        }
      </div>
    </div>
  );
}

export default Body;