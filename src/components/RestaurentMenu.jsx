import Shimmer from "./Shimmer";
import mockMenus from "../utils/mockMenu";
import { useParams } from "react-router-dom";
import Nodata from "./Nodata";

const RestaurentMenu = () => {
  const { resId } = useParams();

  // get menu data using resId
  const resInfo = mockMenus[resId];

  // safety check
  if (!resInfo) return <Nodata/>;

  return (
    <div className="menu">
      <h1>{resInfo.name}</h1>
      <p>{resInfo.cuisines.join(", ")}</p>
      <p>⭐ {resInfo.rating} • {resInfo.deliveryTime} mins</p>

      <h3>Menu</h3>
      <ul>
        {resInfo.menu.map(item => (
          <li key={item.itemId}>
            {item.name} – ₹{item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurentMenu;
