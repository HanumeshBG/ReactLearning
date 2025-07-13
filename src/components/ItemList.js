import {RESTAURANT_IMAGE_URL} from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/redux/cartSlice';

const ItemList = ({ data }) => {
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }
    return (
        <div className="shadow-lg rounded-lg py-2">
            {data?.map((item) => (
                <div data-testid="foodItem" key={item?.card?.info?.id} className='flex justify-between items-center p-4 m-2 bg-gray-50 shadow-lg rounded-lg hover:cursor-pointer'>
                    <div className="p-2 m-2 w-9/12 h-auto bg-gray-100 shadow-lg rounded-lg hover:bg-gray-200">
                        <h3 className='font-bold'>{item?.card?.info?.name}</h3>
                        <p className='text-xs'>{item?.card?.info?.price ? `Price: ₹${item?.card?.info?.price / 100}` : "Price not available"}</p>
                        <p className='text-xs'>{item?.card?.info?.description}</p>
                    </div>
                    <div className='w-3/12 text-center h-auto'>
                        <img className='rounded-lg' src={RESTAURANT_IMAGE_URL + item?.card?.info?.imageId} alt="Item" />
                        <button className='px-2 bg-blue-200 rounded-lg hover:bg-blue-300 hover:cursor-pointer'
                        onClick={() => handleAddItem(item)}>Add</button>
                    </div>
                </div>
            ))}
        </div>     
    )
}

export default ItemList;