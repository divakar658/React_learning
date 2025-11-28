import RestaurrentCard  from "./RestaurrentCard";
import resObj from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search For Food" />
      </div>

      <div className="res-container">
      
        {
            resObj.map((restaurant,id)=>(
                <RestaurrentCard key={id} resData={restaurant}/>
            ))
        };
      </div>
    </div>
  );
};
export default Body;