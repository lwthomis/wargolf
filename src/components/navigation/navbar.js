import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

import Logout from '../logout';

function Navbar() {
    const isLogin = sessionStorage.getItem("islogin");
    const isAdmin = sessionStorage.getItem("isAdmin");

    return (
        <div className='navigation-wrapper'>
            <div className='left-side-nav'>
                <div className='nav-link-wrapper'>    
                    <Link to='/'>Home</Link>
                    <Link to='/schedule'>2022 Tournament Schedule</Link>                    
                    { isAdmin === "true" ? 
                        <Link to='/schedule/manager'>Schedule Manager</Link> 
                    : null }
                    { isAdmin === "true" ? 
                        <Link to='/register'>User Manager</Link>
                    : null }
                </div>
            </div>

            <div className='right-side-nav'>
                    <div className='player-name'>WARREN THOMIS</div>
                    { isLogin === "true" ? <Logout /> :
                        <Link to='/login' className='login-logout-button'>Login <FontAwesomeIcon className='login' icon={faSignInAlt}/></Link>}                
            </div>
        </div>
    )

}

export default Navbar;