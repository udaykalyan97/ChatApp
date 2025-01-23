import React from "react";
import Login from "../components/Register/Login";
import SignUp from "../components/Register/SignUp";


const RegisterPage = ({login}) => {
    return (
        <>
            {login ? <Login login={login}/> : <SignUp login={login}/>}
        </>
    )
}

export default RegisterPage;