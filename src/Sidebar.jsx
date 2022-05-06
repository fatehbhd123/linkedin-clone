import { Avatar } from '@mui/material';
import React from 'react';
import AvatarImg from "./images/Avatar.jpg";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
function Sidebar() {
    function recentItem(topic) {
        return (
            <div className='sidebar_recentItem'>
                <span className="sidebar_hash">#</span>
                <p>{topic}</p>
            </div>
        )
    }
    const user = useSelector(selectUser);
    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img
                    src="https://www.theanimedaily.com/wp-content/uploads/2022/02/one-piece-a-fan-talks-about-the-way-zoro-lost-his-eye-with-a-short-comic-1024x576.jpg"
                    alt="" />
                <Avatar src={user.photoURL} alt="" className='sidebar_avtar' >{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email} </h4>
            </div>
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    <p className='sidebar_statNumber'>2156</p>
                </div>
                <div className="sidebar_stat">

                    <p> Views on post</p>
                    <p className='sidebar_statNumber'>2156</p>
                </div>
            </div>
            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem('react JS')}
                {recentItem('one piece')}
                {recentItem('roronoa')}
                {recentItem('computer science')}
            </div>
        </div>
    )
}

export default Sidebar
