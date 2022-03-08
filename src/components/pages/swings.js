import React from 'react';
import { Player } from 'video-react';
import swingOne from '../../videos/swingOne.MOV';
import swingTwo from '../../videos/swingTwo.MOV';
import swingThree from '../../videos/swingThree.mov';
// import swingFour from '../../videos/IMG_1274.mov';
// import swingFive from '../../videos/IMG_1281.mov';
// import swingSix from '../../videos/IMG_1085.mov';

function Swings() {
  return (
    <div className='video-wrapper'>
      <div className='swing-wrapper'>
        <Player className="swing-video"
          playsInline
          src={swingOne} 
        />
      </div>
      
      <div className='swing-wrapper'>
        <Player className="swing-video"
          playsInline
          src={swingTwo} 
        />
      </div>
      <div className='swing-wrapper'>
        <Player className="swing-video"
          playsInline
          src={swingThree} 
        />
      </div>
      {/* <div className='swing-wrapper'>
        <Player className="swing-video"
          playsInline
          src={swingFour} 
        />
      </div>
      <div className='swing-wrapper'>
        <Player className="swing-video"
          playsInline
          src={swingFive} 
        />
      </div> 
            <div className='swing-wrapper'>
        <Player className="swing-video"
          playsInline
          src={swingSix} 
        />
      </div> */}

    </div>
  )
}

export default Swings