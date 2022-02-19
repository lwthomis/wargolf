import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/main.scss';

import HomePage from './components/pages/home';
import Login from './components/pages/login';
import Schedule from './components/pages/schedule';
import ScheduleManager from './components/pages/scheduleManager';
import Navbar from './components/navigation/navbar';
import Sidebar from './components/navigation/sidebar';
import RegisterUser from './components/pages/registerUser';


function App() {

  return (
    <div className="App"> 
      <BrowserRouter>
        <Navbar />
        <div className='page-wrapper'>
          <Sidebar />
          <Routes className="page-content">
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/schedule' element={<Schedule />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/register' element={<RegisterUser />} />
            <Route exact path='/schedule/manager' element={<ScheduleManager />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
