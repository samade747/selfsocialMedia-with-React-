export const LoginStart = (usercredential)=> ({ // This line defines an action creator function named LoginStart which takes user credentials as input.
    type: "LOGIN_START" // This line returns an action object with type "LOGIN_START".
})

export const LoginSuccess = (user)=> ({ // This line defines an action creator function named LoginSuccess which takes a user object as input.
    type: "LOGIN_SUCCESS", // This line returns an action object with type "LOGIN_SUCCESS".
    payload: user, // This line includes the user object as payload in the action.
})

export const LoginFailure = (error)=> ({ // This line defines an action creator function named LoginFailure which takes an error object as input.
    type: "LOGIN_FAILURE", // This line returns an action object with type "LOGIN_FAILURE".
    payload: error, // This line includes the error object as payload in the action.
})

export const Follow = (userId)=> ({ // This line defines an action creator function named Follow which takes a userId as input.
    type: "FOLLOW", // This line returns an action object with type "FOLLOW".
    payload: userId, // This line includes the userId as payload in the action.
})

export const Unfollow = (userId)=> ({ // This line defines an action creator function named Unfollow which takes a userId as input.
    type: "UNFOLLOW", // This line returns an action object with type "UNFOLLOW".
    payload: userId, // This line includes the userId as payload in the action.
})
