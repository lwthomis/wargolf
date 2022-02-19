import React from 'react';

import Tournaments from '../tournaments/tournaments';

export default function Schedule() {

    return (
      <div className='tournament-schedule-wrapper'>
        <div className='title'>2022 Tournament Schedule</div>
        <div className='schedule-items-wrapper'>
          <Tournaments />
        </div>

      </div>
    )
}





        