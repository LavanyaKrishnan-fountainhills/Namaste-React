import {useContext} from "react";
import ItemList from "./ItemList";


const RestaurantCategory = ({ data ,showItems,setShowIndex}) => {

    const handleClick = () => {
        setShowIndex();
    }

  return (
    <div className="w-6/12 bg-gray-300 mx-auto  mb-5 text-center p-4  " >
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold text-lg">
          {data.title}({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>

      <div>

        {showItems && <ItemList items={data.itemCards} />}

      </div>
    </div>
  );
};

export default RestaurantCategory;
