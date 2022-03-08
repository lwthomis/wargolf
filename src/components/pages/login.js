import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
 
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  let navigate = useNavigate();

  function refreshPage() {
      window.location.reload(false);
  }

  const handleClick = (event) => {
    event.preventDefault();
    
    axios.post(`${process.env.REACT_APP_API}`,{
        email: email,
        password: password
        })
        .then(function(response){
            if (response.data.data.isAdmin === true){
                sessionStorage.setItem("islogin", true);
                sessionStorage.setItem("isAdmin", true);
                navigate('/schedule');
                window.location.reload(false);
            }
            else if(response.data.data.isAdmin === false){
                sessionStorage.setItem("islogin", true);
                sessionStorage.setItem('isAdmin', false);
                navigate('/');
                window.location.reload(false);
            }
            else 
              console.log("Invalid Login Credentials");
        })
        .catch(function(error){
            console.log(error);
        });
  };

  return (
    <div className='login-form'>
      <h1 className='title'>Login</h1> 

      <div className='field-name'>
        <h3>Email</h3>
        <input type="text" value={email} onChange={event => setEmail(event.target.value)} />
      </div>
      
      <div className='field-name'>
        <h3>Password</h3>
        <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
      </div>


      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <div className='button-wrapper'>
        <button className="submit-button login-button" onClick={handleClick} type='submit'>Login</button>
      </div>
    </div>
  );
}

export default Login;