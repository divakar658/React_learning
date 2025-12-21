import { Outlet } from "react-router-dom";
const Contact=()=>
{
    return(
        <div>
            <h1>contact us via social media</h1>
            <h4>instagram</h4>
            <h4>twitter</h4>
            <h4>whatsap</h4>
            <h4>gmail</h4>
            <Outlet/>
        </div>
        
    );
};
export default Contact;