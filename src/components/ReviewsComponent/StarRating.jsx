import StarIcon from "./StarIcon";

const StarRating = ({ rating }) => {
  const totalStars = 5;

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {Array.from({ length: totalStars }, (_, index) => (
        <StarIcon key={index} fill={index < rating ? "#ffc531" : "#f2f4f7"} />
      ))}
    </div>
  );
};

export default StarRating;
