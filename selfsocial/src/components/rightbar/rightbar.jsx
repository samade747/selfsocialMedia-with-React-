import "./rightbar.css";
import RedeemIcon from '@mui/icons-material/Redeem';
import { Dummydata } from "../../dummyData";
import Online from "../online/online";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function Rightbar({ user }) {
    const [friends, setfriends] = useState([]);
    const { user: currentUser, dispatch } = useContext(AuthContext);
    const [followed, setfollowed] = useState(currentUser.followings.includes(user?._id));

    const handleclick = async () => {
        
    }
    
}
