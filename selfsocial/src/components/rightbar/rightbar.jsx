import "./rightbar.css";
import RedeemIcon from '@mui/icons-material/Redeem';
import { Dummydata } from "../../dummyData";
import Online from "../online/online";
import { useContext, useState, useEffect, useImperativeHandle } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function Rightbar({ user }) {
    const [friends, setfriends] = useState([])
    const { user: currentUser, dispatch } = useContext(AuthContext);
    const [followed, setfollowed] = useState(currentUser.followings.includes(user?._id));

    const handleclick = async () => {
        try{
            if(followed){
                await axios.put('http://localhost:8800/api/users/' + user._id + '/unfollow', {userId:currentUser._id})
                dispatch({type:"UNFOLLOW",payload:user._id})
            }
            
            else{
                await axios.put('http://localhost:8800/api/users/' + user._id + '/follow', {userId:currentUser._id})
                dispatch({type:"FOLLOW",payload:user._id})                
            }
        } catch(error) {
                console.log(error);
        }
        setfollowed(!followed)
    }
    


useEffect(() => {
    setfollowed(currentUser.followings.includes(user?._id))
}, [currentUser, user?._id])

useEffect(() => {
    const getfriends = async () => {
        if (user?._id) {
            try {
                const res = await axios.get("http://localhost:8800/api/users/" + user?._id + "/friends");
                setfriends(res.data);
            } catch (err) {
                console.log(err);
            }
        }
    }
    getfriends()
}, [user?._id])


const Homerightbar = () => {
    return (
       <>
       <div className="birthdaycontainer">
        <RedeemIcon className="birthdayicon" />
        <span className="birthdaytext">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
        </span>
       </div>
       <img className="rightbarad" src="assets/gift.png" alt=""/>
       <h4 className="rightbartitle">Online Friends</h4>
       <ul className="rightbarfriendlist">

       {Dummydata.map((u) => (
            <Online key={u.id} user={u} />
       ))}
       </ul>                            
       </> 
    )
}




















}