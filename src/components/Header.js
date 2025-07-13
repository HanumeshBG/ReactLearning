import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";  
import { useContext } from "react";
import UserContext from "../utils/UserContext"; // Importing UserContext
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const { LoggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items)

  return (
    <div className='flex justify-between bg-pink-100 shadow-lg'>
      <div className=''>
        <img className='w-30' src={LOGO_URL} alt="logo" /> 
      </div>
      <div className='m-4 p-4'>
        <ul className="flex justify-between items-center gap-3 hover:pointer-cursor">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/ContactUs">Contact</Link></li>
          <li className="font-bold text-xl"><Link to="/Cart">Cart - ({cartItems.length} items)</Link></li>
          <button className='m-2 p-2 bg-blue-100 rounded-lg hover:bg-blue-200 hover:cursor-pointer'
          onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}>{btnName}</button>
          <li>{LoggedInUser}</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;