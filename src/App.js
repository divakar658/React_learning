import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import RestaurrentCard from "./components/RestaurrentCard.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import Thanks from "./components/Thanks.jsx";
import { createBrowserRouter, RouterProvider ,Outlet} from "react-router-dom";
import RestaurentMenu from "./components/RestaurentMenu.jsx";



const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};
// console.log("react-off-day");
const Approuter=createBrowserRouter([
    {
      path:"/",
      element:<Applayout></Applayout>,
      errorElement:<Error/>,
      children:[
            {
              index:true,
              element:<Body/>,
            },
            {
              path:"about",
              element:<About></About>,
            },
            {
              path:"contact",
              element:<Contact></Contact>,
              children:[
                {
                  path:"thanks",
                  element:<Thanks/>,
                },
              ]
            },
            {
              path:"restaurent/:resId",
              element:<RestaurentMenu/>,
            }
      ]
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Approuter}/>);