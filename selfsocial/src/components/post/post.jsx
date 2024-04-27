import "./post.css"; // This line imports the CSS file named "post.css" to apply styling to the Post component.
import MoreVertIcon from '@mui/icons-material/MoreVert'; // Importing icon component from Material-UI
import ThumbUpIcon from '@mui/icons-material/ThumbUp'; // Importing icon component from Material-UI
import FavoriteIcon from '@mui/icons-material/Favorite'; // Importing icon component from Material-UI
import { useEffect, useState } from "react";  // This line imports the useEffect and useState hooks from the React library.
import axios from "axios"; // This line imports the axios library for making HTTP requests.
import { format, render, cancel, register } from "timeago.js"; // This line imports functions from the timeago.js library for formatting time.
import { Link } from "react-router-dom"; // This line imports the Link component from react-router-dom for client-side routing.
import { useContext } from "react"; // This line imports the useContext hook from the React library.
import { AuthContext } from "../../context/authcontext"; // This line imports the AuthContext from the specified file path.


function Post({post}) {// / This line defines a functional component named Post which takes a prop named 'post'.
    const [like, setlike] = useState(post.likes.length); // This line declares a state variable 'like' and initializes it with the length of the 'likes' array in the 'post' prop.
    const [islike, setislike] = useState(false); // This line declares a state variable 'islike' and initializes it with a boolean value of 'false'.
    const [user, setUser] = useState({}); // This line declares a state variable 'user' and initializes it with an empty object.
    const {user:currentuser} = useContext(AuthContext) // This line extracts the 'user' property from the 'AuthContext' and assigns it to the 'currentuser' variable.

    



}