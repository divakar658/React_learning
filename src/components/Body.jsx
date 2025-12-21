import RestaurrentCard from "./RestaurrentCard.jsx";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.jsx";
import { Link } from "react-router-dom";
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
  return listOfRestaurents.length==0?<Shimmer/>:(

    <div className="body">
     <div className="filter">
        <div className="search-box">
           <input type="text" placeholder="search for restaurent or food" value={SearchText} onChange={(e)=>
            {
               setSearchText(e.target.value);
               const filteredList=listOfRestaurents.filter((res)=>
              {
                return res.info.name.toLowerCase().includes(SearchText.toLowerCase());

              });
              setlistOfRestaurents(filteredList);
            }
           }/>
           <button className="search-btn" onClick={()=>
            {
               const filteredList=listOfRestaurents.filter((res)=>
              {
                return res.info.name.toLowerCase().includes(SearchText.toLowerCase());

              });
              setlistOfRestaurents(filteredList);
            }
           }
           >search</button>
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
          <Link to={"/restaurent/"+restaurant?.info?.id} key={restaurant?.info?.id}>
            <RestaurrentCard
            resData={restaurant}
            />
          </Link>
        ))}
      </div>
    </div>
  );
  
};

export default Body;
