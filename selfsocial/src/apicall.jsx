// Importing the Axios library for making HTTP requests
import axios from "axios";

// Defining an asynchronous function called logincall that takes usercredentials and dispatch as parameters
export const logincall = async (usercredential, dispatch) => {
    // Dispatching an action to indicate the start of the login process
    dispatch({ type: "LOGIN_START" });
    try {
        // Making an HTTP POST request to the login endpoint with usercredentials
        const res = await axios.post("http://localhost:8800/api/auth/login", usercredential);
        // Dispatching an action to indicate the success of the login process, and passing the response data as payload
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (error) {
        // Dispatching an action to indicate the failure of the login process, and passing the error as payload
        dispatch({ type: "LOGIN_FAILURE", payload: error });
    }
}
