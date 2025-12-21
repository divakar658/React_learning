import { useState ,useEffect} from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom";
const Header = () => {
  const [btn,setbtn]=useState("Login");
  useEffect(()=>{
    console.log("useeffect_rendered");
  },[btn]);
  // console.log("header rendered");
  const changestate=()=>
  {
    if(btn=="Login")
    {
       setbtn("Logout");
    }
    else{
      setbtn("Login");
    }
  }
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>
            <Link to="/about">About-us</Link>
            </li>
          <li><Link to="/contact">contact-us</Link></li>
          <button className="login" onClick={changestate}>{btn}</button>
        </ul>
      </div>
    </div>
  );
}; 
export default Header;