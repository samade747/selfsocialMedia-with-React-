const AuthReducer = (state, action) => { // This line defines the AuthReducer function which takes the current state and an action as parameters.
    switch(action.type){ // This line begins a switch statement based on the type of action.
     case "LOGIN_START": // This line defines a case for the action type "LOGIN_START".
            return{ // This line returns a new state object.
                user: null, // This line sets the user property to null.
                isfetching: true, // This line sets the isfetching property to true.
                error: false // This line sets the error property to false.
            }; // This line marks the end of the case block.
     case "LOGIN_SUCCESS": // This line defines a case for the action type "LOGIN_SUCCESS".
                return{ // This line returns a new state object.
                    user: action.payload, // This line sets the user property to the payload of the action.
                    isfetching: false, // This line sets the isfetching property to false.
                    error: false // This line sets the error property to false.
                }; // This line marks the end of the case block.
     case "LOGIN_FAILURE": // This line defines a case for the action type "LOGIN_FAILURE".
                    return{ // This line returns a new state object.
                        user: null, // This line sets the user property to null.
                        isfetching: false, // This line sets the isfetching property to false.
                        error: action.payload // This line sets the error property to the payload of the action.
                    }; // This line marks the end of the case block.
                    case "Follow": // This line defines a case for the action type "Follow".
                        return{ // This line returns a new state object.
                            ...state, // This line spreads the current state.
                            user: { // This line begins a nested object update for the user property.
                                ...state.user, // This line spreads the current user object.
                                followings: [...state.user.followings, action.payload] // This line updates the followings array by adding the payload.
                            } // This line marks the end of the nested object update.
                        }; // This line marks the end of the case block.
                        case "UNFollow": // This line defines a case for the action type "UNFollow".
                            return{ // This line returns a new state object.
                                ...state, // This line spreads the current state.
                                user: { // This line begins a nested object update for the user property.
                                    ...state.user, // This line spreads the current user object.
                                    followings: state.user.followings.filter((following) => following !== action.payload) // This line updates the followings array by removing the payload.
                                } // This line marks the end of the nested object update.
                            }; // This line marks the end of the case block.
    default: // This line defines the default case if none of the above cases match.
    return state // This line returns the current state without any changes.
    } // This line marks the end of the switch statement.
}; // This line marks the end of the AuthReducer function.

export default AuthReducer // This line exports the AuthReducer function as the default export.
