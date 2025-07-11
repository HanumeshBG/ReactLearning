import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/redux/cartSlice"; // Importing clearCart action

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <div className="w-9/12 m-auto">
            <div className="text-center mx-auto">
                <h1 className="text-2xl font-bold m-2">Cart Items</h1>   
                <button className="m-2 p-2 bg-blue-100 rounded-lg hover:bg-blue-200 hover:cursor-pointer"
                onClick={handleClearCart}>Clear Cart</button>   
            </div>
            <div className="flex flex-col items-center">
                {cartItems.length === 0 && <h2 className="text-xl font-semibold text-center">No items in the cart</h2>}
                <ItemList data={cartItems}/>
            </div>
        </div>
    )
}

export default Cart;