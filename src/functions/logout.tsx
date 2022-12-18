import React, { Component } from "react";
import { useNavigate } from 'react-router-dom';
import { logout } from "../services/authSerivce";
import { useEffect, useState } from "react"

function Logout (){
    const navigate = useNavigate();
    useEffect(()=>{ 
        logout();
        navigate('/');
    },[])

    return null;
}

export default Logout;
