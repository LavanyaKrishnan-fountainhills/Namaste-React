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

  const totalPage = Math.ceil(filteredRestaurant.length / itemPerPage);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex justify-center items-center m-4 gap-5 ">
        <div className="search">
          <input
            type="text"
            className="w-60 border border-gray-300 outline-none rounded mr-6 py-2 px-3"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="py-2 px-3 bg-amber-700 rounded text-white"
            onClick={() => {
              // console.log(searchText);
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
          className="py-2 px-3 bg-amber-700 rounded text-white"
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
      <div className="">
        <div className="grid gap-6 m-6 justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {currentItems.map((restaurant) => (
            // <RestaurantCard key={restaurant.data.id} resData={restaurant} />
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
              className="flex justify-center items-center "
            >
              <ResCard resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center space-x-2">
        <div>
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="py-2 px-6 rounded  bg-amber-700 text-white font-bold"
          >
            Prev
          </button>
        </div>
        <span className="font-bold">
          Page {currentPage} of {totalPage}
        </span>
        <div>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPage}
            className="py-2 px-6 rounded  bg-amber-700 text-white font-bold"
          >
            Next
          </button>
     
        </div>
        
      </div>
      
    </div>
  );
};

export default Body;
