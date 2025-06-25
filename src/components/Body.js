import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [searchText, setSearchText] = useState("");

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
      <div className='filter'>
        <div className='search-bar'>
          <input type="text" placeholder='Search...' value={searchText} onChange={(e) => {
            setSearchText(e.target.value);
          }}/>
          <button className='search-btn' onClick={() => {
            const filtered = restaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredList(filtered);
          }}>Search</button>
        </div>
        <div>
          <button 
            className='filter-btn'
            onClick={() => {
                    const filtered = restaurants.filter((res) => res.info.avgRating > 4.5);
                    setFilteredList(filtered);
                }}
            > Top Rated Restaurant</button>
        </div>
        <div/>
      </div>
      <div className='restaurant-list'>
        {
          filteredList.map((restaurant) => (
            <Link key={restaurant.info.id} to={`/restaurant/${restaurant.info.id}`}>
              <RestaurantCard resData={restaurant} />
            </Link>
          ))
        }
      </div>
    </div>
  );
}

export default Body;