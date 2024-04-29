import { useRef } from "react"; // this line imports the useRef hook from the React library
import "./register.css"; // this line imports the CSS file named "register.css" to apply styling to the Register component
import axios from "axios"; // this line imports the axios library for making HTTP requests
import { useNavigate } from "react-router-dom"; // this line imports the useNavigate hook from the react-router-dom library

export default function Register() { // this line defines a functional component named Register and exports it as the default export
    const username = useRef(); // this line creates a reference to the username input field
    const email = useRef(); // this line creates a reference to the email input field
    const password = useRef(); // this line creates a reference to the password input field
    const passwordAgain = useRef(); // this line creates a reference to the password again input field
    const navigate = useNavigate(); // this line creates a reference to the useNavigate hook

    const handleClick = async (e) => { // this line defines an event handler function named handleClick
        e.preventDefault(); // this line prevents the default form submission behavior
        if (passwordAgain.current.value !== password.current.value) { // this line checks if the password and password again fields match
            passwordAgain.current.setCustomValidity("Passwords don't match!"); // this line sets the custom validity of the password again field to "Passwords don't match!"
         } else {
            const user = { // this line creates an object named user
                username: username.current.value, // this line sets the username property of the user object to the value of the username input field
                email: email.current.value, // this line sets the email property of the user object to the value of the email input field
                password: password.current.value // this line sets the password property of the user object to the value of the password input field
            };
            try { // this line starts a try block
                await axios.post("/auth/register", user); // this line sends a POST request to the /auth/register endpoint with the user object as the request body
                navigate("/login"); // this line navigates the user to the /login page
            } catch (err) { // this line starts a catch block
                console.log(err); // this line logs the error to the console
        }
    }

    }
}

