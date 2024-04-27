import "./profile.css";
import Topbar from "../../topbar/Topbar";
import Sidebar from "../../sidebar/Sidebar";
import Feed from "../../feed/Feed";
import Rightbar from "../../rightbar/Rightbar";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";


export default function Profile() {   // This line defines a functional component named Profile and exports it as the default export.
    const [user, setUser] = useState({}); // This line declares a state variable 'user' using the useState hook, initialized to an empty object.
    const username = useParams().username; // This line extracts the 'username' parameter from the URL using the useParams hook.

    useEffect(() => { // This line declares a useEffect hook, which runs after the component renders.
        const fetchUser = async () => { // This line defines an asynchronous function 'fetchuser'.
            const res = await axios.get(`http://localhost:8800/api/user?username=${username}`) // // This line sends an HTTP GET request to fetch user data from the specified endpoint.
        setUser(res.data) // This line updates the 'user' state variable with the data received from the HTTP response.
    }
    fetchUser() // This line invokes the 'fetchuser' function.

    },[]) // This line specifies an empty dependency array, indicating that the effect runs only once after the initial render.
// This line marks the beginning of the return statement, indicating what the component should render.
return ( 
    <>
    <Topbar /> // This line renders the Topbar component.
    <div className="profile"> // This line marks the beginning of the 'profile' div, indicating the start of the profile section.
    <Sidebar /> // This line renders the Sidebar component.
    <div className="profileRight"> // This line renders a div element with the class name "profileright".
    <div className="profileRightTop"> // This line renders a div element with the class name "profilerighttop".
    <div className="profilecover"> // This line renders a div element with the class name "profilecover".
            <img src={user.coverPicture ? user.coverPicture : "../src/assets/no cover.png"} alt=""  className="profilecoverimg"/> // This line renders an image element with the source determined by the 'coverPicture' property of the 'user' object. If 'coverPicture' is falsy, it falls back to a default image.
            <img src={user.profilePicture ? user.profilePicture : "../src/assets/no avatar.png"} alt=""  className="profileuserimg"/> // This line renders an image element with the source determined by the 'profilePicture' property of the 'user' object. If 'profilePicture' is falsy, it falls back to a default image.
            </div>
            <div className="profileinfo"> // This line renders a div element with the class name "profileinfo".
        <h4 className="profileinfoname">{user.username}</h4> // This line renders an h4 element with the username of the user.
        <span className="profileinfodesc">{user.desc}</span> // This line renders a span element with the description of the user.
            </div>
          </div>
          <div className="profilebottom"> // This line renders a div element with the class name "profilebottom".
          <Feed username={username}/> // This line renders the Feed component with the 'username' prop set to the value extracted from the URL.
          <Rightbar user={user}/> // This line renders the Rightbar component with the 'user' prop set to the user object.
          </div>
          </div>
        </div>



    






    </>
)











}