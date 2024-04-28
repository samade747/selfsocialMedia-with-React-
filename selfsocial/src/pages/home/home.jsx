import React from "react"; // This line imports the React library.
import Topbar from "../../components/topbar/topbar"; // This line imports the Topbar component from the specified file path.
import Sidebar from "../../components/sidebar/sidebar"; // This line imports the Sidebar component from the specified file path.
import Feed from "../../components/feed/feed"; // This line imports the Feed component from the specified file path.
import Rightbar from "../../components/rightbar/rightbar"; // This line imports the Rightbar component from the specified file path.
import "./home.css"; // This line imports the CSS file named "home.css" to apply styling to the Home component.

export default function Home(){ // This line defines a functional component named Home.
    return( // This line marks the beginning of the return statement, indicating what the component should render.
        <div> // This line renders a div element.
          <Topbar/> // This line renders the Topbar component.
          <div className="container"> // This line renders a div element with the class name "container".
            <Sidebar/> // This line renders the Sidebar component.
            <Feed/> // This line renders the Feed component.
            <Rightbar/> // This line renders the Rightbar component.
          </div> // This line marks the end of the div element with the class name "container".
        </div> // This line marks the end of the outer div element.
    ) // This line marks the end of the return statement.
} // This line marks the end of the Home component.
