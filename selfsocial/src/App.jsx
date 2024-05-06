// Importing the CSS file for styling
import "./App.css"
// Importing necessary components and functions from React Router
import Home from './pages/home/home'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Login from './pages/home/login/login'
import Register from "./pages/home/register/register";
import Profile  from './components/post/profile/profile'
// Importing the useContext hook from React
import { useContext } from "react"
// Importing the AuthContext from a custom context defined elsewhere in the application
import { AuthContext } from "./context/authcontext";

// Defining the main function component named App
function App() {
  // Using the useContext hook to access the user object from the AuthContext
  const {user} = useContext(AuthContext)
  // Returning JSX (JavaScript XML) for rendering
  return (
    <>
    {/* Creating a BrowserRouter component to enable routing */}
    <Router>
      {/* Defining route configuration */}
      <Routes>
        {/* Route for the home page */}
        {/* If the user is logged in, render the Home component, else render the Register component */}
        <Route path="/" element={user ?  <Home /> : <Register/>}></Route>
        {/* Route for the login page */}
        {/* If the user is logged in, redirect to the home page, else render the Login component */}
        <Route path="/login" element={user ? <Navigate to={"/"}/> : <Login />}></Route>
        {/* Route for the registration page */}
        {/* If the user is logged in, redirect to the home page, else render the Register component */}
        <Route path="/register" element={user ? <Navigate to={"/"}/> : <Register />}></Route>
        {/* Route for the user profile page */}
        {/* Always render the Profile component, which displays user profile information */}
        <Route path="/profile/:username" element={<Profile />}></Route>
      </Routes>
    </Router>
    </>
  )
}

// Exporting the App component as the default export of this module
export default App
