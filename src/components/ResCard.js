const ResCard = ({ resData }) => {
  const { name, avgRating, sla, cuisines } = resData?.info;

  return (
    <div className=" p-4 w-60  bg-gray-200 rounded-lg shadow-md mb-5 hover:scale-100 transition-transform duration-200">
      <h2 className="text-lg font-bold mb-2 text-center">{name}</h2>
      <p className="text-sm mb-1">
        ⭐ {avgRating} | ⏱ {sla?.deliveryTime} mins
      </p>
      <p className="text-sm text-gray-700">{cuisines?.join(", ")}</p>
    </div>
  );
};

export default ResCard