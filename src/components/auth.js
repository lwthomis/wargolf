import { request } from 'http';
import React, { Component } from 'react'

export class Auth extends Component {
    constructor(){
        super()

        this.verifySignIn=this.verifySignIn.bind(this);
    }

    verifySignIn() {
        axios
            .post('http://localhost:8000/users/signin/')
            .then(response => {
                console.log(response);
                // this.setState({
                //   data: response.data.data
            })                         
            .catch(error => {
                console.log(error);
            });
    }

    render() {

        verifyUser(request, response) {
            this.verifySignIn();
            const user = request.body.username;
            const pwd = request.body.password;

            if (!user || !pwd) {
                return request.status(400).json({
                    error: true, 
                    message: "Username or Password is required."
                })
            }
            if (user !== userData.username || pwd !== userData.password) {
                return res.status(401).json({
                  error: true,
                  message: "Username or Password is wrong."
                });
              }
        }

        return (
            <div>
                
            </div>
        )
    }
}

export default Auth