import { Search, SupervisorAccount, Home, BusinessCenter, Chat, Notifications } from '@mui/icons-material';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import HeaderOption from './HeaderOption';
import Logo from "./images/LinkedinLogo.png";

function Header() {
    const dispatch = useDispatch();
    const logOutOfApp = () => {
        dispatch(logout());
        signOut(auth);
    }
    return (
        <div className='header'>
            <div className="header_left">
                <img src={Logo} alt="Logo" />
                <div className="header_search">
                    <Search />
                    <input type="text" name="" id="" />
                </div>
            </div>
            <div className="header_right">
                <HeaderOption Icon={Home} title="Home" />
                <HeaderOption Icon={SupervisorAccount} title="My network" />
                <HeaderOption Icon={BusinessCenter} title="Jobs" />
                <HeaderOption Icon={Chat} title="Messaging" />
                <HeaderOption Icon={Notifications} title="Notification" />
                <HeaderOption avatar={true} title="Me" onClick={logOutOfApp} />
            </div>
        </div>
    )
}

export default Header;
