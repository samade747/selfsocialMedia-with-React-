import { createContext, useReducer } from "react"; // This line imports the createContext and useReducer hooks from the React library.
import AuthReducer from "./authreducer"; // This line imports the AuthReducer from the specified file path.

const INITIAL_STATE = { // This line declares the initial state object for the authentication context.
    user:{    
        _id,
        username,
        email,
        password,
        profilePicture,
        coverPicture,
        followers:[""],
        followings:[""],
        isAdmin:false
    },
    isfetching: false, // This line initializes the 'isfetching' property to false.
    error: false // This line initializes the 'error' property to false.
}

export const AuthContext = createContext(INITIAL_STATE); // This line creates the AuthContext with the initial state.

export const AuthContextProvider = ({children})=>{ // This line defines the AuthContextProvider component.
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE); // This line initializes the state and dispatch using the useReducer hook.

    return( // This line marks the beginning of the return statement, indicating what the component should render.
        <AuthContext.Provider value={{user: state.user, isfetching: state.isfetching, error: state.error, dispatch}}> // This line provides the state and dispatch as context values to its children.
        {children} // This line renders the children components wrapped within the AuthContext.Provider.
        </AuthContext.Provider> // This line marks the end of the AuthContext.Provider.
    ) // This line marks the end of the return statement.
} // This line marks the end of the AuthContextProvider component.