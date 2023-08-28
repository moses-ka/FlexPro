//nutrition.jsx


import CalProtien from "./calProtien"
import Navbar from "./navbar";
import ProtienCalories from "./protienCalories";
import { useState,useEffect } from "react";
import LoginSignup from "./loginSignup";
import Cookies from 'js-cookie';
import jwtDecode from "jwt-decode";

const Nutrition = () => {
const [user,setUser]=useState(null);
 useEffect(()=>{
  const cookie = Cookies.get('token')
  setUser(cookie);
 },[])
 
  if (user!== null) {
    return (
      <>
        <div className="flex flex-col gap-4 ">
        <Navbar />
        <CalProtien />
        <ProtienCalories />
        </div>
      </>
    );
  }
  else {
    return <LoginSignup />;
  }
 
};

export default Nutrition;
