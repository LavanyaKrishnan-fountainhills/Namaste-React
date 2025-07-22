// import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import ResCard from "./ResCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantsList from "../utils/useRestaurantsList";

const Body = () => {
  const itemPerPage = 5;

  const [searchText, setSearchText] = useState("");

  console.log("Body Rendered");

  const {
    listOfRestaurants,
    filteredRestaurant,
    currentPage,
    setFilteredRestaurant,
    setListOfRestraunt,
    setCurrentPage,
  } = useRestaurantsList();

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>oopss! you're offline !! please check your internet connection !</h1>
    );
  }

  const indexOfLastItem = itemPerPage * currentPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;

  const currentItems = filteredRestaurant.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePrev = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestraunt(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {currentItems.map((restaurant) => (
          // <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <ResCard resData={restaurant} />
          </Link>
        ))}
      </div>
      <div>
        <div>
          <button onClick={handlePrev}>Prev</button>
        </div>
        <div>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Body;
