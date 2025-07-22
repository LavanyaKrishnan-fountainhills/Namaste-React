import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId)


  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[0]?.card?.card?.info || {};

    console.log(resInfo?.cards?.[0]?.card?.card?.info  );
    

  const regularCards = resInfo?.cards?.find(
    (card) => card.groupedCard
  )?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  // console.log(regularCards);
  

  const menuItemsCard = regularCards?.find(
    (card) => card?.card?.card?.itemCards
  );

  // console.log(menuItemsCard);
  

  const itemCards = menuItemsCard?.card?.card?.itemCards || [];

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => {
          const info = item.card.info;
          return (
            <li key={info.id}>
              {info.name} - ₹
              {(info.price ?? info.defaultPrice ?? 0) / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
