import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

const ResCard = ({ resData }) => {

  const data = useContext(UserContext)
  const { name, avgRating, sla, cuisines } = resData?.info;

  return (
    <div className=" p-4 w-60  bg-gray-200 rounded-lg shadow-md mb-5 hover:scale-100 transition-transform duration-200">
      <h2 className="text-lg font-bold mb-2 text-center">{name}</h2>
      <p className="text-sm mb-1">
        ⭐ {avgRating} | ⏱ {sla?.deliveryTime} mins
      </p>
      <p className="text-sm text-gray-700">{cuisines?.join(", ")}</p>
      <p>{data.loggedInUser}</p>
    </div>
  );
};


export const WithPromotedLabel = (ResCard) => {
  return (props) => {
    console.log(props);
    
    return (
      <div>
        <label>Promoted</label>
        <ResCard {...props}/>
      </div>
    );
  }

}


// higer order component 

// takes this current rescard and enhance it with a new rescard 
//  so the output will be enhanced that it rescard with promoted label 
// here the higer order componenet takes the input that is existing res card then enhance it based on some data 

export default ResCard