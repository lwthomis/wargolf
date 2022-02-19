import React, { Component } from 'react'

import picThree from '../../images/playerPics/pic_three.jpeg';

class HomePage extends Component {
    render() {
        return (
            <div className='player-pics'>
                <img src={picThree} alt='Pic' />
            </div>
        )
    }
}
export default HomePage;