import React from 'react'
import jwtDecode from 'jwt-decode';
import { useEffect,useState } from 'react'
import {BiSolidUserCircle} from 'react-icons/bi';
export default function LoginSignup() {
const [user,setUser]=useState({});
    const handleCallBackResponse = (response)=>{
        const userObj = jwtDecode(response.credential);
        setUser(userObj);
    }
    const onClickHandler = () => {
        
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
        
        click_listener: onClickHandler
      });
    },[])
  return (
    <>
    <section id="login-signup" className='flex flex-col justify-center items-center p-6 drop-shadow-xl mb-12 '>
        <div className='flex  flex-col justify-center items-center 
            gap-8 bg-gray-400 rounded-[50px]  p-6 w-full h-full
             drop-shadow-xl '>

                <div className='flex flex-col justify-center items-center'>
             
                    <h1 className='text-4xl font-serif'>Flex Pro</h1>
                    <BiSolidUserCircle size={100} />
                    <h2 className='text-2xl text-center'> Log in</h2>
                </div>
                <div id='signInDiv' className=''>
            {/* {googleLogin} */}
                </div>
        </div>
    </section>
    </>
  )
}
