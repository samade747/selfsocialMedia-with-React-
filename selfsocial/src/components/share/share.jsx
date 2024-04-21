// Importing necessary dependencies and components
import "./share.css"; // Importing styles from share.css file
import PermMediaIcon from '@mui/icons-material/PermMedia'; // Importing icon component from Material-UI
import LabelIcon from '@mui/icons-material/Label'; // Importing icon component from Material-UI
import RoomIcon from '@mui/icons-material/Room'; // Importing icon component from Material-UI
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'; // Importing icon component from Material-UI
import { Link } from "react-router-dom"; // Importing Link component from react-router-dom for navigation
import { useContext, useRef, useState } from "react"; // Importing hooks from React for state management
import { AuthContext } from "../../context/authcontext"; // Importing AuthContext for authentication
import axios from "axios"; // Importing axios for making HTTP requests

// Defining Share component
export default function Share() {
    
    // using useContex hook to access the AuthContext
    const { user } = useContext(AuthContext); // accessing user from AuthContext

    // using useRef hook to create a reference for input element 
    const desc = useRef(); // creating a reference for input element

    // using useState hook to manage file state
    const [file, setfile] = useState(); // Initializing file state variable

    // Handling from submission 
    const handleSubmit = async (e) => { // Defining a function to handle form submission
        e.preventDefault(); // preventing default form submission behavoiur

        const newPost = { // Creating a new post object
            userId: user._id, // Assigning user ID to the new post
            desc: desc.current.value, // Assigning the value of the input field to the new post's description
        };

        if (file) { // Checking if file exists
            const Data = new FormData(); // Creating a new FormData object
            const filename = Date.now() + file.name; // Generating a unique filename
            Data.append("name", filename); // Adding the filename to the FormData object
            Data.append("file", file); // Appending file to FormData
           newPost.img = filename; // Adding filename to the new post object

            // uplodaing he file to the server
            try {
                await axios.post("http://localhost:8800/api/upload", Data); // Uploading the file to the server    
            } catch(error){
                console.log(error) //  Logging any errors that occur during file upload
            }
            }

            // creating a new Post 
            try {
                await axios.post('http://localhost:8800/api/posts', newPost); // Creating a& Making a post req to the server
                        window.location.reload(); // Reloading the page                 
            } catch(error){
                console.log(error) //  Logging any errors that occur during post creation
            }

        
    }

    return(
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src={user.profilePicture ? user.profilePicture : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} alt="" className="shareProfileImg" />
                    <input placeholder={"What's on your mind " + user.username + "?"} className="shareinput" ref={desc} />
                </div>
                <hr className="shareHr" />
                

            </div>
        </div>


    )












}

