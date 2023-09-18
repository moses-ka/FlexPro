//navBar for the app

import { FaNutritionix } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { IoIosFitness } from "react-icons/io";
import { Link } from "react-router-dom";
import {HiHome} from "react-icons/hi";
import {MdOutlineFastfood} from "react-icons/md";

const  Navbar = ()=> {
  return (
    <>
      <nav className=" w-full fixed bottom-0 left-0 right-0 z-50 ">
        <div className="">
          <div
            className="className= flex   justify-evenly items-center w-full h-14 shadow-md rounded-t-full
                   bg-[#34344d] shadow-[#483468]  lg:h-20 "
          >
            {/* <div className="bg-[#171728] group rounded-full h-14 w-14 flex flex-col justify-center items-center"> */}
            <li className=" list-none ">
              <Link to="/nutrition" className="">
                <MdOutlineFastfood
                  className=" text-[#f2f2f2] hover:text-[#3c42de] transform hover:scale-110 transition duration-500  lg:h-20"
                  size={30}
                />
              </Link>
            </li>
            {/* </div> */}
            <li className="list-none">
              <Link to="/fitness">
                {
                  <IoIosFitness
                    className=" text-[#f2f2f2]  hover:text-[#3c42de]  transform hover:scale-110 transition duration-500 lg:h-20"
                    size={32}
                  />
                }
              </Link>
            </li>
            <li className="list-none">
              <Link to="/home">
                {
                  <HiHome
                    className=" text-[#f2f2f2]  hover:text-[#3c42de] transform hover:scale-110 transition duration-500 lg:h-20"
                    size={30}
                  />
                }
              </Link>
            </li>
            <li className="list-none">
              <Link to="/profile">
                {" "}
                {
                  <BsFillPersonFill
                    className=" text-[#f2f2f2] hover:text-[#3c42de] transform hover:scale-110 transition duration-500 lg:h-20"
                    size={30}
                  />
                }{" "}
              </Link>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;