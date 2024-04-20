import "./topbar.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Topbar() {
    const { user } = useContext(AuthContext);

    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to='/' style={{ textDecoration: 'none' }}> // link to home
                    <span className="logo">SelfSocial</span>
                </Link>
            </div>
        

        <div className="topbarCenter">
            <div className="searchbar">
                <SearchIcon className="searchIcon" />
                <input type="search" placeholder="Search for friend, post or video" className="searchInput" />                
            </div>
        </div>

        









        </div>
    )



}