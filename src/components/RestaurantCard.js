import{ RESTAURANT_IMAGE_URL } from '../utils/constants';
const RestaurantCard = (props) => {
  const { name, cuisines, cloudinaryImageId, avgRatingString, costForTwo } = props.resData.info;
  return (
    <div className='restaurant-card'>
      <img src={`${RESTAURANT_IMAGE_URL}/${cloudinaryImageId}`} alt="Restaurant" />
      <h3>{name}</h3>
      <p>{cuisines}</p>
      <p>{avgRatingString} Ratings</p>
      <p>{costForTwo}</p>
    </div>
  );
}

export default RestaurantCard;