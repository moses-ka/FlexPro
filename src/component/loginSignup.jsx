import React from 'react'
import jwtDecode from 'jwt-decode';
import { useEffect,useState } from 'react'
import {BiSolidUserCircle} from 'react-icons/bi';
import {FiArrowLeft} from "react-icons/fi";
import { useNavigate } from 'react-router';
import Cookies from 'js-cookie';

export default function LoginSignup() {
  const  [user,setUser]=useState(null);

  useEffect (()=>{
  const cookie = Cookies.get('token')
   if(cookie !== undefined && cookie !== null){
     setUser((cookie));
   }
},[])
  
  const Navigate = useNavigate();
  const handleCallBackResponse = (response)=>{
  
        const userObj = jwtDecode(response.credential);
        Cookies.set('token',userObj);
        Navigate ("/nutrition");
    }
   
        
    
    useEffect(()=>{
        // globle google 
    
        google.accounts.id.initialize({
        client_id:"415826891239-f65s479gk67mrb7prbn1uq35ke22cni3.apps.googleusercontent.com",
        callback:handleCallBackResponse
        
      })
      google.accounts.id.renderButton(document.getElementById("signInDiv"), {
        theme: 'outline',
        size: 'large',
        width:'250px',
        text:'continue_with',
        shape:'pill',
        
    
      });
    },[])
    // console.log(user)
    if (user !== null && user !== undefined){
     Navigate ("/nutrition")
      return (
        <></>
      )
  } else if (user === null || user === undefined){
    return (<>
      <section id="login-signup" className='flex flex-col justify-center items-center p-6 drop-shadow-xl  h-screen  bg-black'>
        <div className='flex  flex-col justify-center items-center 
            gap-6 bg-gray-400 rounded-[50px]  p-6 w-full md:w-3/6 h-full
             drop-shadow-xl '>

                <div className='flex flex-col justify-center items-center gap-6 '>
             
                    <h1 className='text-4xl font-serif text-center'>Welcome to  Flex Pro</h1>
                    <span className='text-xl font-serif text-center'> Are you ready to embark on a journey towards a healthier, fitter
              you?</span>
                    <BiSolidUserCircle size={100} className=' drop-shadow-xl hover:text-[#6000fc]' />
                    <h2 className='text-2xl text-center'> Log in</h2>
                </div>
                <div id='signInDiv' className=' drop-shadow-xl'>
            {/* {googleLogin} */}
                </div>
                    <FiArrowLeft size={50} onClick={()=>{ Navigate("/")}}
                     className=' md:mt-14 text-lg animate-bounce hover:text-[#6000fc]'/>
        </div>
    </section>
    </>)
  }
}
