import RestaurrentCard from "./RestaurrentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

  const [listOfRestaurents, setlistOfRestaurents] = useState([]);
  const [SearchText,setSearchText]=useState("");

  const fetchData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8459348&lng=80.22652289999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await res.json();

    setlistOfRestaurents(
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
    );
  };

  useEffect(() => {
    fetchData();
  }, []);
  // if(listOfRestaurents.length==0)
  // {
  //   return <Shimmer></Shimmer>;
  // }
  console.log("body rendred");
  return listOfRestaurents.length==0?<Shimmer/>:(

    <div className="body">
     <div className="filter">
        <div className="search-box">
           <input type="text" placeholder="search for restaurent or food" value={SearchText} onChange={(e)=>
            {
              setSearchText(e.target.value);
            }
           }/>
           <button className="search-btn">search</button>
        </div>
           <button
        className="filter-btn"
        onClick={() => {
          const filteredList = listOfRestaurents.filter(
            (res) => res?.info?.avgRating > 4
          );
          setlistOfRestaurents(filteredList);
        }}
      >
        Top Rated Restaurant
      </button>
     </div>

      <div className="res-container">
        {listOfRestaurents.map((restaurant) => (
          <RestaurrentCard
            key={restaurant?.info?.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
  
};

export default Body;
