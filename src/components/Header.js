import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  // const data = useContext(UserContext)
  // console.log(data);
  

  return (
    // <div className=" ">
      <div className=" flex flex-col md:flex-row w-full items-center justify-between bg-gray-400 p-4 gap-4 ">
        <img src={LOGO_URL} className="w-24" />
        <ul className="flex gap-6 items-center ml-14 ">
          <li className="hover:bg-amber-700 hover:py-2 hover:px-4 hover:rounded transition">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="hover:bg-amber-700 hover:py-2 hover:px-4 hover:rounded transition">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:bg-amber-700 hover:py-2 hover:px-4 hover:rounded transition ">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:bg-amber-700 hover:py-2 hover:px-4 hover:rounded transition">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="hover:bg-amber-700 hover:py-2 hover:px-4 hover:rounded transition">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <button
              onClick={() =>
                btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
              }
              className="  py-2 px-6 rounded  bg-amber-700 text-white font-bold"
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    // </div>
  );
};

export default Header;
