
const ResCard = ({resData}) => {
  const {name,avgRating,deliveryTime} = resData?.data
  
  return (
    <div>
      <h1>{name}</h1>
      <h2>{avgRating} Stars</h2>
      {/* <p>{deliveryTime}</p> */}
      {/* <p>{cuisines.join(" ")}</p> */}
    </div>
  );
}

export default ResCard