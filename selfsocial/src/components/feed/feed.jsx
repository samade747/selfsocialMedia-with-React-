import Post from "../post/post"; // This line imports the Post component from the post folder.
import Share from "../share/share"; // This line imports the Share component from the share folder.
import "./feed.css"; // This line imports the CSS file named "feed.css" to apply styling to the Feed component.
import { useContext, useEffect, useState } from "react"; // This line imports the useContext, useEffect, and useState hooks from the React library.
import axios from "axios"; // This line imports the axios library for making HTTP requests.
import { AuthContext } from "../../context/authcontext"; // This line imports the AuthContext from the specified file path.

export default function Feed({username}) { // This line defines a functional component named Feed and exports it as the default export.
    const [posts, setPosts] = useState([]); // This line declares a state variable 'posts' using the useState hook, initialized to an empty array.
    const {user} = useContext(AuthContext); // This line extracts the 'user' property from the 'AuthContext' and assigns it to the 'user' variable.
}


useEffect(() => { // This line declares a useEffect hook, which runs after the component renders.
    const fetchPosts = async () => { // This line defines an asynchronous function 'fetchPosts'.
    const res = username ? await axios.get(`/posts/profile/${username}`) : await axios.get(`/posts/timeline/${user._id}`) // This line sends an HTTP GET request to fetch posts from the specified endpoint.
    await axios.get("http://localhost:8800/api/post/profile/" + username) : // This line sends an HTTP GET request to fetch posts by username if 'username' is provided.
    await axios.get("http://localhost:8800/api/post/timeline/" + user._id); // This line sends an HTTP GET request to fetch posts from the user's timeline if 'username' is not provided.
        setPosts(res.data.sort((a,b) => { // This line sorts the posts based on their creation date.
    return new Date(b.createdAt) - new Date(a.createdAt); // This line returns the difference between the creation dates of 'a' and 'b'.
   }));
  }
  fetchPosts(); // This line invokes the 'fetchPosts' function.
},[username,user._id]); // This line specifies the dependencies for the useEffect hook.

useEffect(() => { // This line declares a useEffect hook, which runs after the component renders.
    const fetchPosts = async () => { // This line defines an asynchronous function 'fetchPosts'.
    const res = username ?  // This line conditionally sets the value of 'res' based on whether 'username' is provided.
    await axios.get("http://localhost:8800/api/post/profile/" + username) : // This line sends an HTTP GET request to fetch posts by username if 'username' is provided.
    await axios.get("http://localhost:8800/api/post/timeline/" + user._id); // This line sends an HTTP GET request to fetch posts from the user's timeline if 'username' is not provided.
     setPosts(res.data.sort((a,b) => { // This line sorts the posts based on their creation date.
      return new Date(b.createdAt) - new Date(a.createdAt); // This line returns the difference between the creation dates of 'a' and 'b'.
     }));
    }
    fetchPosts(); // This line invokes the 'fetchPosts' function.
  },[username,user._id]); // This line specifies the dependencies for the useEffect hook.
  
