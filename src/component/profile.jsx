import React,{useEffect, useState} from "react";
import Navbar from "./navbar";
import { BiSolidUserCircle } from "react-icons/bi";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
export default function Profile() {
  const [user, setUser] = useState(null);
  const [userObj, setUserObj] = useState(null);
 
  const Navigate = useNavigate();
  useEffect(() => {
    const cookie = Cookies.get("token");
    if (cookie !== undefined && cookie !== null) {
      setUser(cookie);
      const parsedCookie = JSON.parse(cookie);
      setUserObj(parsedCookie);
    } else {
      navigate("/login");
    }
  },[]);
  // console.log(user , 'user ');
  return (
    <>
      <Navbar />
      <section
        id="profile"
        className="flex flex-col justify-center items-center p-6 drop-shadow-xl  mb-12 h-screen"
      >
        <div className="flex flex-col justify-center items-center gap-4 bg-gray-600 rounded-[50px] p-4 w-full md:w-3/5 h-5/6 mt-2  drop-shadow-xl ">
          <div className="flex flex-col justify-center items-center gap-4  bg-gray-200 rounded-[50px] h-52 p-4 w-5/6  drop-shadow-xl ">
            <BiSolidUserCircle
              size={80}
              className="hover:text-[#6000fc]
                         transform hover:scale-110 transition duration-500"
            />
            <span className="text-xl font-bold"> {userObj?.name}</span>
            <span className="text-xl "> // level 1</span>
          </div>
             {/* <Link className="w-full" to="/setting">
          <div className="flex justify-between items-center gap-2 lg:gap-10 bg-gray-400 rounded-full p-4 w-full lg:w-[800px] drop-shadow-xl    ">
            <span className=" text-left capitalize"> setting</span>{" "}
            <HiAdjustmentsHorizontal size={32} className="text-black" />
          </div>
            </Link> */}
            <Link className="w-5/6" to="/account">
          <div className="flex justify-between items-center gap-2 lg:gap-10 bg-gray-400 rounded-full p-4 w-full drop-shadow-xl    ">
              <span className=" text-left capitalize transform hover:scale-110 transition duration-500">account</span>
              <HiAdjustmentsHorizontal size={32} className="text-black transform hover:scale-110 transition duration-500" />
          </div>
            </Link>
          <button
            className="text-center text-xl font-['Raleway'] p-2
                        font-bold capitalize text-black rounded-3xl
                         w-5/6 bg-white hover:text-[#6000fc]
                         transform hover:scale-110 transition duration-500"
            onClick={() => {
              Cookies.remove("token");
              Navigate("/");
            }}
          >
            Logout
          </button>
        </div>
      </section>
    </>
  );
}
