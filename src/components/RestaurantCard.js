import{ RESTAURANT_IMAGE_URL } from '../utils/constants';
const RestaurantCard = (props) => {
  const { name, cuisines, cloudinaryImageId, avgRatingString, costForTwo } = props.resData.info;
  return (
    <div className='p-2 m-2 w-60 h-[450px] bg-gray-100 shadow-lg rounded-lg hover:bg-gray-200'>
      <img className='rounded-lg' src={`${RESTAURANT_IMAGE_URL}/${cloudinaryImageId}`} alt="Restaurant" />
      <h3 className='font-bold'>{name}</h3>
      <p>{cuisines.join(', ')}</p>
      <p>{avgRatingString} Ratings</p>
      <p>{costForTwo}</p>
    </div>
  );
}

export const WithPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <label className='absolute m-2 p-2 bg-black text-white rounded-lg'>Promoted</label>
        <RestaurantCard {...props}>  </RestaurantCard>
      </>
    )
  }
}

export default RestaurantCard;