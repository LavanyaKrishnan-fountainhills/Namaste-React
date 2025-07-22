import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  
  // let btnName = "login"
  const [btnName,setBtnName] = useState("Login")

  const onlineStatus = useOnlineStatus();

  // useEffect(() => {
  //   console.log('useEffect only calls when the btnname is changes')
  // },[btnName])

  return (
    <div>
      <div>
        <img src={LOGO_URL}/>
      </div>
      <div>
        <ul>
          <li>Online Status 
            {onlineStatus ? 
            "✅" : "🔴"}
          </li>
          <li><Link to={'/'}>Home </Link></li>
          <li><Link to={'about'}>About</Link></li>
          <li><Link to={'/contact'}>Contact Us</Link></li>
          <Link to={'/grocery'}>Grocery</Link>
          <button onClick={() => btnName === "login" ? setBtnName('logout' ): setBtnName('login')}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
}

export default  Header