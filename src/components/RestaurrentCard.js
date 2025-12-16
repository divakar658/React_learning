import { CDN_URL } from "../utils/constants";
const RestaurrentCard = (props) => {
    const {resData}=props;
  return (
    <div className="res-card">
      <img
        className="res-img"
        src={CDN_URL+resData.info.cloudinaryImageId}
        alt="burger"
      />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.avgRating}</h4>
      {<h4>{resData.info.sla.deliveryTime}:Minutes</h4>}
    </div>
  );
};
export default RestaurrentCard;