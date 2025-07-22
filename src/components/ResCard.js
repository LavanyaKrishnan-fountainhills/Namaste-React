const ResCard = ({ resData }) => {
  const { name, avgRating, sla, cuisines } = resData?.info;

  // console.log("what's geting over here",resData);
  
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        margin: "12px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        width: "250px"
      }}
    >
      <h2 style={{ margin: "0 0 8px 0", fontSize: "20px" }}>{name}</h2>
      <p style={{ margin: "4px 0", color: "#555" }}>
        ⭐ {avgRating} | ⏱ {sla?.deliveryTime} mins
      </p>
      <p style={{ margin: "4px 0", color: "#777" }}>
        {cuisines?.join(", ")}
      </p>
    </div>
  );
};

export default ResCard;
