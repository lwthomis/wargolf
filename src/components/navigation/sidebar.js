import React, { Component } from 'react'

import Articles from '../articles';
import SocialMediaLinks from '../social-media';
import blackLogo from '../../images/logos/warren-logo-2024-black.png';
import { Sponsors } from '../sponsors';
import Contact from '../contact';



class Sidebar extends Component {
    render() {
        return (
            <div className='sidebar'>
                <div className='wardog-logo'>
                    <img src={blackLogo} alt='logo' />
                </div>
                <div className='side-content'>
                    <Articles />
                    <SocialMediaLinks />
                    <Contact />
                    <Sponsors />
                </div>
            </div>
            
        )
    }
}

export default Sidebar;