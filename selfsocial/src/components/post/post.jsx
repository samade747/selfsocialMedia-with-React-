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

    useEffect(() => { // This line declares a useEffect hook, which runs after the component renders.
        const fetchUser = async () => { // This line defines an asynchronous function 'fetchUser'.
            try{
                const res = await axios.get(`http://localhost:8800/api/user?username=${post.username}`) // // This line sends an HTTP GET request to fetch user data from the specified endpoint.
                setUser(res.data) // This line updates the 'user' state variable with the data received from the HTTP response.

            } catch(error) {
                console.log(error) //  Logging any errors that occur during user data retrieval.                
            }
        }
        fetchUser(); // This line invokes the 'fetchuser' function.


    }, [post.userId]); // This line defines the dependencies for the 'fetchuser' function.

    const likeHandler = () => { // This line defines a function 'likeHandler'.
        try{
            axios.put('http://localhost:8800/api/posts/' + post._id + '/like', {userId:currentuser._id}) // This line sends an HTTP PUT request to update the 'likes' array in the 'post' object with the current user's ID.
            setislike(!islike) // This line updates the 'islike' state variable to the opposite of its current value.
        } catch(error) {
            console.log(error)
        }

        return(// This line marks the beginning of the return statement, indicating what the component should render.
        <div className="post"> // This line renders a div element with the class name "post".
            <div className="postwrapper"> // This line renders a div element with the class name "postwrapper".
                 <div className="posttop"> // This line renders a div element with the class name "posttop".
                    <div className="posttopleft"> // This line renders a div element with the class name "posttopleft".
                    <Link to={`profile/${user.username}`}> // This line renders a Link component for client-side routing to the profile page of the post's user.
                        <img className="postuserimg" src={user.profilePicture || "../src/assets/no avatar.png"} alt="hi!" /> // This line renders an image element with the profile picture of the post's user or a default avatar.
                        </Link>
                        <span className="postusername">{user.username || "unknown"}</span> // This line renders a span element with the username of the post's user or "unknown" if not available.
                        <span className="postmin">{format(post.createdAt)}</span> {/* Display time ago */} // This line renders a span element with the formatted creation time of the post.
                    </div>
                    <div className="posttopright"> // This line renders a div element with the class name "posttopright".
                        <MoreVertIcon /> // This line renders the MoreVertIcon component.
                    </div>
                </div>
                <div className="postcenter"> // This line renders a div element with the class name "postcenter".
                    <span className="posttext">{post.desc}</span> // This line renders a span element with the description of the post.
                    {post.img && <img className="postimg" src={`http://localhost:8800/images/${post.img}`} alt="Posted" />} // This line conditionally renders an image element if the post contains an image.
                </div>
                <div className="postbottom"> // This line renders a div element with the class name "postbottom".
                    <div className="postbottomleft"> // This line renders a div element with the class name "postbottomleft".
                        <ThumbUpIcon htmlColor="blue" onClick={likeHandler} className="likeicon" /> // This line renders the ThumbUpIcon component for liking a post.
                        <FavoriteIcon htmlColor="red" onClick={likeHandler} className="likeicon" /> // This line renders the FavoriteIcon component for liking a post.
                        <span className="postlikecounter">{like} people like it</span> // This line renders a span element with the number of likes on the post.
                    </div>
                    <div className="postbottomright"> // This line renders a div element with the class name "postbottomright".
                        <div className="postcommenttext">{post.comment} comment</div> // This line renders a div element with the number of comments on the post.
                    </div>
                </div>
            </div>
        </div> // This line marks the end of the outermost div element.
    )
}