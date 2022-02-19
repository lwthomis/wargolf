import React from "react";

import NewUserForm from "../forms/newUserForm";
import DeleteUserForm from "../forms/deleteUserForm";


function RegisterUser() {
    const isAdmin = sessionStorage.getItem("isAdmin");

    return (
        <div>
            {isAdmin === 'true' ? <h1 className="page-title">User Manager</h1> : <h1 className="page-title">Register New User</h1>}
            <NewUserForm />
            {isAdmin === 'true' ? <DeleteUserForm /> : null } 
        </div>
    );
}

export default RegisterUser;