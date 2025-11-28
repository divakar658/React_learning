import { CDN_URL } from "../utils/constants";
const RestaurrentCard = (props) => {
    const {resData}=props;
    const {name,avgRating,cloudinaryImageId,deliveryTime}=resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-img"
        src={CDN_URL+cloudinaryImageId}
        alt="burger"
      />
      <h3>{name}</h3>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};
export default RestaurrentCard;