import ResCard from "./ResCard";
import resList from "../App";
import resList from "../utils/mockData";
import { useState } from "react";



const Body = () => {
  const [listOfRestaurants,setListOfRestaurants] = useState(resList); 
//  update the listofrestaurants likely a 
//  listofrestaurants= []; like this  we are using setlistofrestaurants ficntion to update the listofrestairats sooners the
//  setlistofrestaurants is called it will re renders my whole react component
  return (
    <div>
      <div className="filter">
        <button
          onClick={() => {
            // listOfRestaurants = resList.filter((res) => res.data.avgRating > 0);
            const filteredList = listOfRestaurants.filter((res) => res.data.avgRating > 4);
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div>
        <div className="res-container">
          {listOfRestaurants.map((restarunt) => (
            <ResCard key={restarunt.data.id} resData={restarunt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;

// this is filtering the avgrating but not updating the Ui
  // whenever the setlistresturnt is called