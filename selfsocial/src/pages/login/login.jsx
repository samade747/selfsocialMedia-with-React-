import { useContext, useRef } from "react"; //// This line imports the useContext and useRef hooks from the React library.
import "./login.css"; // This line imports the CSS file named "login.css" to apply styling to the Login component.
import { logincall } from "../../context/authcontext"; // This line imports the logincall function from the specified file path.
import { Link } from "react-router-dom"; // This line imports the Link component from react-router-dom for client-side routing.

export default function Login() { // This line defines a functional component named Login and exports it as the default export.
    const email = useRef(); // This line creates a reference to the email input field using the useRef hook.
    const password = useRef(); // This line creates a reference to the password input field using the useRef hook.
    const { user, isfetching, error, dispatch } = useContext(AuthContext); // This line uses the useContext hook to access values from the AuthContext.

    const handleClick = async (e) => { // This line defines an event handler function named handleClick.
        e.preventDefault(); // This line prevents the default form submission behavior.
        await logincall({email:email.current.value,password:password.current.value}, dispatch); // This line invokes the logincall function with the email and password values from the input fields.
    };
    console.log(user);

    return( // This line renders the Login component.
        <div className="login"> // This line renders a div element with the class name "login".
        <div className="loginwrapper"> // This line renders a div element with the class name "loginwrapper".
        <div className="loginleft"> // This line renders a div element with the class name "loginleft".
            <h3 className="loginlogo">SM Media</h3> // This line renders an h3 element with the class name "loginlogo" containing the text "SM Media".
            <span className="logindesc"> // This line renders a span element with the class name "logindesc".
                Connect with friends and the world around you on SM Media. // This line renders text describing the purpose of the app.
            </span> // This line marks the end of the span element.
        </div> // This line marks the end of the div element with the class name "loginleft".
        <div className="loginright"> // This line renders a div element with the class name "loginright".
            <form onSubmit={handleClick} className="loginbox"> // This line renders a form element with the class name "loginbox" and sets the onSubmit event handler to handleclick.
                <input  placeholder="Email" type="email" className="logininput" required ref={email} /> // This line renders an input element for email with the placeholder "Email" and a ref to the email variable.
                <input  placeholder="Password" type="password" minLength={6} className="logininput" required ref={password}  /> // This line renders an input element for password with the placeholder "Password", minimum length of 6 characters, and a ref to the password variable.
                 <button className="loginbutton" disabled={isfetching}>{isfetching ? "Loading":"Login"}</button> // This line renders a button element for login with the class name "loginbutton" and displays either "Loading" or "Login" based on the value of isfetching.
                 <span className="loginforgot">Forgot Password?</span> // This line renders a span element with the class name "loginforgot" for the "Forgot Password?" text.
                 <button className="loginregisterbutton"> // This line renders a button element for registration with the class name "loginregisterbutton".
                 {isfetching ? "Loading":"Create anew Account"} // This line displays either "Loading" or "Create anew Account" based on the value of isfetching.
                 </button> // This line marks the end of the button element for registration.
            </form> // This line marks the end of the form element.
        </div> // This line marks the end of the div element with the class name "loginright".
    </div> // This line marks the end of the div element with the class name "loginwrapper".
</div> // This line marks the end of the outer div element.
    ) // This line marks the end of the return statement.
} // This line marks the end of the Login component.