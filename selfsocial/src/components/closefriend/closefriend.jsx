import "./closefriend.css"; // This line imports the CSS file named "closefriend.css" to apply styling to the CloseFriend component.

export default function CloseFriend({user}) { // This line defines a functional component named CloseFriend which takes a prop named 'user'.
    return( // This line marks the beginning of the return statement, indicating what the component should render.
        <li className="sidebarfriend"> // This line renders a list item element with the class name "sidebarfriend".
        <img className="sidebarfriendimg" src={user.profilepic} alt="" /> // This line renders an image element with the source set to the profile picture of the user.
        <span className="sidebarfriendname">{user.username}</span> // This line renders a span element with the username of the user.
    </li> // This line marks the end of the list item element.
    ) // This line marks the end of the return statement.
} // This line marks the end of the CloseFriend component.
