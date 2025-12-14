import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
  const [btn,setbtn]=useState("Login");
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
          <li>About-us</li>
          <li>contact-us</li>
          <button className="login" onClick={changestate}>{btn}</button>
        </ul>
      </div>
    </div>
  );
}; 
export default Header;