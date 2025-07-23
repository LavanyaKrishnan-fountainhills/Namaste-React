import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[0]?.card?.card?.info || {};

  console.log(resInfo?.cards?.[0]?.card?.card?.info);

  const regularCards = resInfo?.cards?.find((card) => card.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  // console.log(regularCards);

  const menuItemsCard = regularCards?.find(
    (card) => card?.card?.card?.itemCards
  );

  // console.log(menuItemsCard);

  const itemCards = menuItemsCard?.card?.card?.itemCards || [];

  return (
    <div className="w-full px-6 py-10">
      <h1 className="text-3xl font-bold mb-2">{name}</h1>
      <p className="text-gray-700 mb-4">
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      <h2 className="mb-5 font-bold text-2xl">Menu</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {itemCards.map((item) => {
          const info = item.card.info;
          return (
            <li key={info.id} className="bg-gray-300 mb-5 p-6 rounded">
              {info.name} - ₹{(info.price ?? info.defaultPrice ?? 0) / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
