//nutrition.jsx


import IntakeCalcaulator from "./intakeCalculator"
import Navbar from "./navbar";
import ProtienCalories from "./protienCalories";
import { useState,useEffect } from "react";
// import LoginSignup from "./loginSignup";
import Cookies from 'js-cookie';

import { useNavigate } from "react-router";

const Nutrition = () => {
const [user,setUser]=useState(null);
const Navigate = useNavigate();
useEffect(() => {
  const cookie = Cookies.get("token");
  if (cookie !== undefined && cookie !== null) {
    setUser(cookie);
  } else {
    Navigate("/login");
  }
}, []);
 
    return (
      <>
        <div className="flex flex-col gap-4 ">
        <Navbar />
        <IntakeCalcaulator />
        <ProtienCalories />
        </div>
      </>
    );
}
 

export default Nutrition;
