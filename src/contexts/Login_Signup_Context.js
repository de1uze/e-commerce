import React, { createContext, useState } from 'react'

import { useAuth0 } from "@auth0/auth0-react";


export const Login_Signup_Context = createContext();

const Login_Signup_Provider = ({ children }) => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [mail, setMail] = useState('');
    const [auth, setAuth] = useState(false);

    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();


    const handleLogin = () => {
        setAuth(true);
        alert(`Welcome ${name}, Login successfull`);
        setName('');
        setPassword('');
        // console.log(name)

    };

    return <Login_Signup_Context.Provider value={
        {
            name, password, handleLogin, setPassword,
            setName, setMail, mail, loginWithRedirect, logout, user, isAuthenticated
        }
    } >
        {children}
    </Login_Signup_Context.Provider >

};

export default Login_Signup_Provider