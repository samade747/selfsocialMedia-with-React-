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

        <div className="topbarRight">

            <div className="topbarLinks">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Timeline</span>
            </div>


            <div className="topbarIcons">

                <div className="topbarIconItem">
                    <PersonIcon />
                    <span className="topbarIconBadge">1</span>
                </div>

                <div className="topbarIconItem">
                    <ChatIcon />
                    <span className="topbarIconBadge">2</span>
                </div>

                <div className="topbarIconItem">
                    <NotificationsIcon />
                    <span className="topbarIconBadge">1</span>
                </div>

            </div>

            <Link to={`/profile/${user.username}`}>
                <img src={user.profilePicture} alt="" className="topbarImg" />
            </Link>
           </div>
        </div>
    )



}