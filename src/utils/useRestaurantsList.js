import { useEffect, useState } from "react";

const useRestaurantsList = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  // const fetchData = async () => {
  //   try {
  //     const data = await fetch(
  //       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //     );
  //     const json = await data.json();
  //     console.log(json.data);

  //     // Dynamically find the card containing the restaurant list
  //     // const restaurantCard = json?.data?.cards.find(
  //     //   (card) => card?.card?.card?.gridElements?.infoWithStyle.restaurants
  //     // );

  //     // const restaurants =
  //     //   restaurantCard?.card?.card?.gridElements?.infoWithStyle.restaurants;

  //     console.log("res", json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  //     if (Array.isArray(restaurants)) {
  //       setListOfRestraunt(  json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  //       setFilteredRestaurant(  json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  //       setCurrentPage(1);
  //     } else {
  //       console.warn("Unexpected data format", json);
  //     }
  //   } catch (err) {
  //     console.error("Error fetching restaurant data:", err);
  //   }
  // };

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      const cards = json?.data?.cards || [];

      // Extract all restaurants from all cards with restaurant data
      const allRestaurants = [];

      cards.forEach((cardObj) => {
        const restaurants =
          cardObj?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        if (Array.isArray(restaurants)) {
          allRestaurants.push(...restaurants);
        }
      });

      // console.log("res", allRestaurants); // ✅ You will see full list here

      if (allRestaurants.length > 0) {
        setListOfRestraunt(allRestaurants);
        setFilteredRestaurant(allRestaurants);
        setCurrentPage(1);
      } else {
        console.warn("No restaurants found.");
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
    currentPage,
  };
};

export default useRestaurantsList;
