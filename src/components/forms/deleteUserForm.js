import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DeleteUserForm() {
    const [users, setUsers] = useState([]);
    const [selectUser, setSelectedUser] =useState([]);
    

    function onChange() {
        var selectedUser = document.getElementById("user-list").value;
        setSelectedUser(selectedUser);
    }

    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API}/users/`)
        .then(response=> setUsers(response.data.data))
        .catch(err=> console.log(err)); 
    },[]); 
    
    async function onDeleteClick(selectUser) {
        await axios.delete(`${process.env.REACT_APP_API}/users/${selectUser}`);
        window.location.reload(true);
    }
    
    return (
        <div className="new-form">
            <h1>Delete Selected User</h1>
            <form>
                <select id="user-list" onChange={onChange}>
                    {users.map(user => {
                        return (
                            <option key={user._id} value={user.value} >{`${user.email}`}</option>
                        )
                    })}
                </select>
                <button onClick={() => onDeleteClick(selectUser)} className="submit-button">Delete User</button>
            </form>
        </div>

    )
}

export default DeleteUserForm