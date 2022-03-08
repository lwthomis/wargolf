import React, { useState }  from 'react'; 
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import AddTournamentForm from "../forms/addTournamentForm2";
import Tournaments from "../tournaments/tournaments";


function Schedule() {
  const [tournamentForm, setTournamentForm] = useState(false);
  const isAdmin = sessionStorage.getItem("isAdmin");

  function addTournFormToggle() {
    tournamentForm === false ? setTournamentForm(true) : setTournamentForm (false)
  }

  return(
    <div className="tournament-schedule-wrapper">
      { isAdmin === "true" ? 
        <div className='true-wrapper'>
          <div className='header-wrapper'>
            <h1 className='page-title'>Schedule Manager</h1>
            <button className='add-tourn-button' onClick={addTournFormToggle}>
              { tournamentForm === false ? <FontAwesomeIcon icon={faPlusCircle}/> : <FontAwesomeIcon icon={faMinusCircle} /> }
            </button>
          </div> 
          <div className="schedule-forms-wrapper">
            {tournamentForm && <AddTournamentForm />}
          </div>
          <Tournaments />
        </div>
        : 
        <div>
          <div className='false-wrapper'>
            <div className='header-wrapper'> 
              <h1 className='page-title'>2022 Tournament Schedule</h1>
            </div>
          </div>
          <Tournaments />
        </div>
        }  
    </div>
  )
}

export default Schedule