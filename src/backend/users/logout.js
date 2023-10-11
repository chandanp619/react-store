import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Logout() {
  const navigate = useNavigate();
  useEffect(()=>{
    var status = localStorage.getItem('userLoggedIn');
    console.log(status);
    if(status == 'true' || status == null){
      localStorage.removeItem('userLoggedIn');
      navigate('/admin/login');
    }
  },[]);
  return (
    <div>Redirecting....</div>
  )
}
