import { useEffect , useState} from "react";


const useRestaurantsList = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, []); 

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      // Dynamically find the card containing the restaurant list
      const restaurantCard = json?.data?.cards.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );

      const restaurants =
        restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      // console.log(restaurants);

      if (Array.isArray(restaurants)) {
        setListOfRestraunt(restaurants);
        setFilteredRestaurant(restaurants);
        setCurrentPage(1);
      } else {
        console.warn("Unexpected data format", json);
      }
    } catch (err) {
      console.error("Error fetching restaurant data:", err);
    }
  };

  return {
    setFilteredRestaurant,
    setListOfRestraunt,
    setCurrentPage,
    listOfRestaurants,
    filteredRestaurant,
    currentPage
  }

};

export default useRestaurantsList;
