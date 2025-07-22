
import { useEffect, useState } from "react"
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {

    const [resInfo,setResInfo] = useState(null)

    useEffect (() => {
        fetchMenu();
    },[])
      const fetchMenu = async () => {
        try {
          const data = await fetch(MENU_API + resId);
          const json = await data.json();
          setResInfo(json.data);
        } catch (error) {
          console.error("Failed to fetch menu", error);
        }
      };


    return resInfo
}

export default useRestaurantMenu

//  created for fetching the data the code looks more cleaner 
