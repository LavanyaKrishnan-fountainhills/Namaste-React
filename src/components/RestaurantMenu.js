import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API + resId);
      const json = await data.json();
      setResInfo(json.data);
    } catch (error) {
      console.error("Failed to fetch menu", error);
    }
  };
  // console.log("Restaurant Info:", resInfo);


  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[0]?.card?.card?.info || {};

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
