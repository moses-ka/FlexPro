//nutrition.jsx


import CalProtien from "./calProtien"
import Navbar from "./navbar";
import ProtienCalories from "./protienCalories";
import { useState,useEffect } from "react";
import LoginSignup from "./loginSignup";
import Cookies from 'js-cookie';
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router";

const Nutrition = () => {
const [user,setUser]=useState(null);
const Navigate = useNavigate();
 useEffect(()=>{
  const cookie = Cookies.get('token')
  setUser(cookie);
 },[])
 
  if (user !== null && user !== undefined) {
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
  else if(user == null || user == undefined){ 
 
      Navigate("/login");
  
    return null
  }
}
export default Nutrition;
