import React from "react";

const ItemList = ({ items }) => {
  return (
    <div className="mb-2">
      {items.map((item) => {
        const { id, name, description, price, imageId } = item.card.info;

        return (
          <div key={id} className="flex justify-between border-b py-4 text-left">

            <div className="w-9/12">
              <h3 className="font-bold text-lg mb-1">{name} - ₹{price / 100}</h3>
              <p className="text-sm text-gray-600">{description}</p>
            </div>

            <div className="w-3/12 flex flex-col items-center justify-between relative">
     
              {/* <img src={CDN_URL + imageId} className="w-full rounded-lg" /> */}

              <button className="absolute bottom-2 px-4 py-1 rounded-md bg-black text-white shadow-lg">
                Add +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
