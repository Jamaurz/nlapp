import React from 'react';

export default function Login(props) {
    var login = props.login;
    //console.log('login', login);
    if(login) {
        return <span>{login} <a href="logout">Logout</a></span>
    } else {
        return <a href='auth/twitter'>Sing in with Twitter</a>
    }
}