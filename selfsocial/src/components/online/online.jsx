import "./online.css" // This line imports the CSS file named "online.css" to apply styling to the Online component.

export default function Online({user}){ // This line defines a functional component named Online which takes a prop named 'user'.
    return( // This line marks the beginning of the return statement, indicating what the component should render.
        <li className="rightbarfriend"> // This line renders a list item element with the class name "rightbarfriend".
        <div className="rightbarprofileimgcontainer"> // This line renders a div element with the class name "rightbarprofileimgcontainer".
            <img src={user.profilepic} alt="" className="rightbarprofileimg" /> // This line renders an image element with the source set to the profile picture of the user.
            <span className="rightbaronline"> // This line renders a span element with the class name "rightbaronline".
            </span> // This line renders an empty span element.
        </div> // This line marks the end of the div element with the class name "rightbarprofileimgcontainer".
        <span className="rightbarusername">{user.username}</span> // This line renders a span element with the username of the user.
    </li> // This line marks the end of the list item element.
    ) // This line marks the end of the return statement.
}