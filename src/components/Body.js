import RestaurrentCard  from "./RestaurrentCard";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    let listOfRestaurentsJS=
    [
      {
                     "id": "38902",
                      "name": "Domino's Pizza",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/11/f190fb57-923d-4469-8a1f-25ee060d33a9_38902.JPG",
                      "cuisines": [
                        "Pizzas",
                        "Italian",
                        "Pastas",
                        "Desserts"
                      ],
                      "avgRating": 4.1,

                     
      },
      {
                      "id": "188457",
                      "name": "KFC",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/17/888af431-0a27-4688-b9af-18fcf2e2b13e_188457.JPG",
                      "cuisines": [
                        "Burgers",
                        "Fast Food",
                        "Rolls & Wraps"
                      ],
                      "avgRating": 4.2
      },
      {
                      "id": "188458",
                      "name": "DOMINOS",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/17/888af431-0a27-4688-b9af-18fcf2e2b13e_188457.JPG",
                      "cuisines": [
                        "Burgers",
                        "Fast Food",
                        "Rolls & Wraps"
                      ],
                      "avgRating": 3.8
      }  
    ]
    const [listOfRestaurents,setlistOfRestaurents]=useState(resObj);
  return (
    <div className="body">
      <button className="filter-btn" onClick={()=>{
        const filteredList=listOfRestaurents.filter((res)=>res.info.avgRating>4.2);
        setlistOfRestaurents(filteredList);
      }}>Top Rated Restaurent</button>

      <div className="res-container">
      
        {
            listOfRestaurents.map((restaurant,id)=>(
                <RestaurrentCard key={id} resData={restaurant}/>
            ))
        }
      </div>
    </div>
  );
};
export default Body;