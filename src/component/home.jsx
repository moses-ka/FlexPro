// this is the home page of the app
import React from "react";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
import {Link} from "react-router-dom";
export default function Home() {
  const [user, setUser] = useState(null);
  const Navigate = useNavigate();
  useEffect(() => {
    const cookie = Cookies.get("token");
    if (cookie !== undefined && cookie !== null) {
      setUser(cookie);
     
    } else {
      Navigate("/login");
    }
  },[]);
  return (
    <>
      <section
        id="home"
        className="flex flex-col justify-center items-center p-6 drop-shadow-xl  mb-12 h-screen"
      >
        <div
          className="flex flex-col justify-evenly items-center gap-6 bg-[#34344d] rounded-[50px] p-4 w-full md:5/6 lg:w-5/6 h-5/6 mt-2  drop-shadow-xl   "
        >
          <div
            className="h-2/6 
              flex justify-center items-center hover:delay-150 
              bg-my-firstImg bg-cover bg-center bg-no-repeat  bg-gray-50 rounded-[50px]
                      w-5/6 group transform hover:scale-110 transition duration-500"
                    
          >
          
            <span
              className=" text-center text-black
                          font-serif  font-extrabold inline lg:hidden  group-hover:inline hover:delay-150 blur-none 
                           text-4xl"
            >
              <Link to="/fitness" className="text-black">
              Workout
              </Link>
              
       
              
            </span>
          </div>

          <div
            className="h-2/6  
            flex justify-center items-center
                 hover:delay-150 bg-my-thirdImg bg-cover bg-center
                 bg-no-repeat  rounded-[50px] 
                      w-5/6 group transform hover:scale-110 transition duration-500"
          >
            <span
              className=" text-center text-black
                          font-serif font-extrabold   inline lg:hidden  group-hover:inline hover:delay-150 blur-none 
                           text-4xl"
            >
                 <Link to="/nutrition" className="text-black">
              nutrition
              </Link>
            </span>
          </div>

          <div
            className="h-2/6 
                 flex justify-center items-center
                 hover:delay-150 bg-my-secImg bg-cover bg-center
                 bg-no-repeat  rounded-[50px]
                      w-5/6 group transform hover:scale-110 transition duration-500 "
          >
               <span  className=" text-center font-extrabold text-black font-serif    inline lg:hidden group-hover:inline hover:delay-150 blur-none  text-4xl" 
            >
              <Link to="/recipes" className="text-black">
              Recipes
              </Link>
            </span>
          </div>
     
        </div>
      </section>
    </>
  );
}
